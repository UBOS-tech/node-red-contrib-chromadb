module.exports = function (RED) {
  const { ChromaClient } = require("chromadb");

  function RemoteServerNode(n) {
    RED.nodes.createNode(this, n);
    this.host = n.host;
  }

  RED.nodes.registerType("remote-server-client", RemoteServerNode);

  function ChromaDBClientNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    const chroma = new ChromaClient({
      path: RED.nodes.getNode(config.remoteServer).host,
    });

    node.status({});

    function successStatus() {
      node.status({ fill: "green", shape: "dot", text: "Success" });
    }

    async function execute(msg) {
      const collectionName = msg.collection || config.collection;

      const { metadata, embeddingFunction } = msg.payload;
      node.status({ fill: "yellow", shape: "dot", text: "Requesting..." });

      switch (config.operation) {
        case "listCollections":
          msg.payload = await chroma.listCollections();
          successStatus();

          break;

        case "createCollection":
          const createCollectionRes = await chroma.createCollection({
            name: collectionName,
            metadata,
            embeddingFunction,
          });

          msg.payload = createCollectionRes;
          successStatus();

          break;

        case "deleteCollection":
          const deleteCollectionRes = await chroma.deleteCollection({
            name: collectionName,
          });

          msg.payload = deleteCollectionRes;
          successStatus();

          break;

        case "getCollection":
          const getCollectionRes = await chroma.getCollection({
            name: collectionName,
            embeddingFunction,
          });

          msg.payload = getCollectionRes;
          successStatus();

          break;

        case "getOrCreateCollection":
          const getOrCreateCollectionRes = await chroma.getOrCreateCollection({
            name: collectionName,
            metadata,
            embeddingFunction,
          });

          msg.payload = getOrCreateCollectionRes;
          successStatus();

          break;

        case "heartbeat":
          const heartbeatRes = await chroma.heartbeat();

          msg.payload = heartbeatRes;
          successStatus();

          break;

        case "reset":
          const resetRes = await chroma.reset();

          msg.payload = resetRes;
          successStatus();

          break;

        case "version":
          const versionRes = await chroma.version();

          msg.payload = versionRes;
          successStatus();

          break;
      }
    }

    node.on("input", function (msg) {
      execute(msg)
        .catch((error) => {
          node.status({ fill: "red", shape: "dot", text: "Error" });

          msg.payload = {
            error: error,
          };
        })
        .then(() => {
          node.send(msg);
        });
    });
  }
  RED.nodes.registerType("chromadb-client", ChromaDBClientNode);
};
