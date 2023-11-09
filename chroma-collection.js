module.exports = function (RED) {
  const { ChromaClient } = require("chromadb");

  function RemoteServerNode(n) {
    RED.nodes.createNode(this, n);
    this.host = n.host;
  }

  RED.nodes.registerType("remote-server-collection", RemoteServerNode);

  function ChromaDBClientNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    // this.server = RED.nodes.getNode(config.server);

    const chroma = new ChromaClient({
      path: RED.nodes.getNode(config.remoteServer).host,
    });

    node.status({});

    function successStatus() {
      node.status({ fill: "green", shape: "dot", text: "Success" });
    }

    async function execute(msg) {
      node.status({ fill: "yellow", shape: "dot", text: "Requesting..." });

      const {
        ids,
        embeddings,
        metadatas,
        documents,
        where,
        whereDocument,
        limit,
        offset,
        include,
        name,
        metadata,
        queryEmbeddings,
        queryTexts,
        nResults,
      } = msg.payload;

      const collectionName = msg.collection || config.collection;
      const collection = await chroma.getCollection({
        name: collectionName,
        embeddingFunction: msg.embeddingFunction,
      });

      switch (config.operation) {
        case "add":
          msg.payload = await collection.add({
            ids,
            embeddings,
            metadatas,
            documents,
          });

          successStatus();
          break;

        case "count":
          msg.payload = await collection.count();

          successStatus();
          break;

        case "delete":
          msg.payload = await collection.delete({ ids, where, whereDocument });

          successStatus();
          break;

        case "get":
          msg.payload = await collection.get({
            ids,
            where,
            limit,
            offset,
            include,
            whereDocument,
          });

          successStatus();
          break;

        case "modify":
          msg.payload = await collection.modify({ name, metadata });

          successStatus();
          break;

        case "peek":
          msg.payload = await collection.peek({ limit });

          successStatus();
          break;

        case "query":
          msg.payload = await collection.query({
            include,
            nResults,
            queryEmbeddings,
            queryTexts,
            where,
            whereDocument,
          });

          successStatus();
          break;

        case "update":
          msg.payload = await collection.update({
            documents,
            embeddings,
            ids,
            metadatas,
          });

          successStatus();
          break;

        case "upsert":
          msg.payload = await collection.upsert({
            documents,
            embeddings,
            ids,
            metadatas,
          });

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
  RED.nodes.registerType("chromadb-collection", ChromaDBClientNode);
};
