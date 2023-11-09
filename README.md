# node-red-contrib-chromadb

**Chroma is the open-source embedding database.** Chroma makes it easy to build LLM apps by making knowledge, facts, and skills pluggable for LLMs.

<p align="center">
  <img width="50%" align="center" alt="Ubos - End-to-End Software Development Platform" src="https://ubos.tech/wp-content/uploads/2023/03/cropped-Group-21015-1.png">
</p>

<h3 align="center">
  <b><a href="https://ubos.tech/">UBOS</a></b>
  •
  <a href="https://community.ubos.tech/">Community</a>
  •
  <a href="https://www.youtube.com/@ubos_tech">Youtube</a>
  •
  <a href="https://discord.com/invite/dt59QaptH2">Discord</a>
  •
  <a href="https://github.com/UBOS-tech">GitHub</a>
</h3>

<hr>

## Install

```
cd ~/.node-red
npm install node-red-contrib-chromadb
```

Restart your Node-RED instance.

<hr>

## Methods Client

### createCollection ([more details](https://docs.trychroma.com/js_reference/Client#createcollection))

▸ **createCollection**(`params`): `Promise`<`Collection`\>

Creates a new collection with the specified properties.

**`Throws`**

If there is an issue creating the collection.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    metadata: {
        description: "My first collection"
    }
};

return msg;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for creating a new collection. |
| `params.embeddingFunction?` | `IEmbeddingFunction` | Optional custom embedding function for the collection. |
| `params.metadata?` | `CollectionMetadata` | Optional metadata associated with the collection. |
| `params.name` | `string` | The name of the collection. |

#### Returns

`Promise`<`Collection`\>

A promise that resolves to the created collection.

___

### deleteCollection ([more details](https://docs.trychroma.com/js_reference/Client#deletecollection))

▸ **deleteCollection**(`params`): `Promise`<`void`\>

Deletes a collection with the specified name.

**`Throws`**

If there is an issue deleting the collection.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {};

return msg;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for deleting a collection. |
| `params.name` | `string` | The name of the collection. |

#### Returns

`Promise`<`void`\>

A promise that resolves when the collection is deleted.

___

### getCollection ([more details](https://docs.trychroma.com/js_reference/Client#getcollection))

▸ **getCollection**(`params`): `Promise`<`Collection`\>

Gets a collection with the specified name.

**`Throws`**

If there is an issue getting the collection.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {};

return msg;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for getting a collection. |
| `params.embeddingFunction?` | `IEmbeddingFunction` | Optional custom embedding function for the collection. |
| `params.name` | `string` | The name of the collection. |

#### Returns

`Promise`<`Collection`\>

A promise that resolves to the collection.

___

### getOrCreateCollection ([more details](https://docs.trychroma.com/js_reference/Client#getorcreatecollection))

▸ **getOrCreateCollection**(`params`): `Promise`<`Collection`\>

Gets or creates a collection with the specified properties.

**`Throws`**

If there is an issue getting or creating the collection.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    metadata: {
        description: "My first collection"
    }
};

return msg;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for creating a new collection. |
| `params.embeddingFunction?` | `IEmbeddingFunction` | Optional custom embedding function for the collection. |
| `params.metadata?` | `CollectionMetadata` | Optional metadata associated with the collection. |
| `params.name` | `string` | The name of the collection. |

#### Returns

`Promise`<`Collection`\>

A promise that resolves to the got or created collection.

___

### heartbeat ([more details](https://docs.trychroma.com/js_reference/Client#heartbeat))

▸ **heartbeat**(): `Promise`<`number`\>

Returns a heartbeat from the Chroma API.

#### Returns

`Promise`<`number`\>

A promise that resolves to the heartbeat from the Chroma API.

___

### listCollections ([more details](https://docs.trychroma.com/js_reference/Client#listCollections))

▸ **listCollections**(): `Promise`<`CollectionType`[]\>

Lists all collections.

**`Throws`**

If there is an issue listing the collections.

#### Returns

`Promise`<`CollectionType`[]\>

A promise that resolves to a list of collection names.

___

### reset ([more details](https://docs.trychroma.com/js_reference/Client#reset))

▸ **reset**(): `Promise`<`Reset200Response`\>

Resets the state of the object by making an API call to the reset endpoint.

**`Throws`**

If there is an issue resetting the state.

#### Returns

`Promise`<`Reset200Response`\>

A promise that resolves when the reset operation is complete.

___

### version ([more details](https://docs.trychroma.com/js_reference/Client#version))

▸ **version**(): `Promise`<`string`\>

Returns the version of the Chroma API.

#### Returns

`Promise`<`string`\>

A promise that resolves to the version of the Chroma API.

## Methods Collection

### add ([more details](https://docs.trychroma.com/js_reference/Collection#add))

▸ **add**(`params`): `Promise`<`AddResponse`\>

Add items to the collection

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    ids: ["id1", "id2"],
    embeddings: [
        [1, 2, 3],
        [4, 5, 6],
    ],
    metadatas: [{ key: "value" }, { key: "value" }],
    documents: ["document1", "document2"],
};

return msg;
```

#### Parameters

| Name                 | Type                        | Description                              |
| :------------------- | :-------------------------- | :--------------------------------------- |
| `params`             | `Object`                    | The parameters for the query.            |
| `params.documents?`  | `string` \| `Documents`     | Optional documents of the items to add.  |
| `params.embeddings?` | `Embedding` \| `Embeddings` | Optional embeddings of the items to add. |
| `params.ids`         | `string` \| `IDs`           | IDs of the items to add.                 |
| `params.metadatas?`  | `Metadata` \| `Metadatas`   | Optional metadata of the items to add.   |

#### Returns

`Promise`<`AddResponse`\>

- The response from the API. True if successful.

---

### count ([more details](https://docs.trychroma.com/js_reference/Collection#count))

▸ **count**(): `Promise`<`number`\>

Count the number of items in the collection

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {};

return msg;
```

#### Returns

`Promise`<`number`\>

- The response from the API.

---

### delete ([more details](https://docs.trychroma.com/js_reference/Collection#delete))

▸ **delete**(`params?`): `Promise`<`string`[]\>

Deletes items from the collection.

**`Throws`**

If there is an issue deleting items from the collection.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    ids: "some_id",
    where: { key: "value" },
    whereDocument: { "$contains": "search_string" }
};

return msg;
```

#### Parameters

| Name                    | Type              | Description                                                                   |
| :---------------------- | :---------------- | :---------------------------------------------------------------------------- |
| `params`                | `Object`          | The parameters for deleting items from the collection.                        |
| `params.ids?`           | `string` \| `IDs` | Optional ID or array of IDs of items to delete.                               |
| `params.where?`         | `Where`           | Optional query condition to filter items to delete based on metadata values.  |
| `params.whereDocument?` | `WhereDocument`   | Optional query condition to filter items to delete based on document content. |

#### Returns

`Promise`<`string`[]\>

A promise that resolves to the IDs of the deleted items.

---

### get ([more details](https://docs.trychroma.com/js_reference/Collection#get))

▸ **get**(`params?`): `Promise`<`GetResponse`\>

Get items from the collection

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    ids: ["id1", "id2"],
    where: { key: "value" },
    limit: 10,
    offset: 0,
    include: ["embeddings", "metadatas", "documents"],
    whereDocument: { $contains: "value" },
};

return msg;
```

#### Parameters

| Name                    | Type              | Description                                        |
| :---------------------- | :---------------- | :------------------------------------------------- |
| `params`                | `Object`          | The parameters for the query.                      |
| `params.ids?`           | `string` \| `IDs` | Optional IDs of the items to get.                  |
| `params.include?`       | `IncludeEnum`[]   | Optional list of items to include in the response. |
| `params.limit?`         | `number`          | Optional limit on the number of items to get.      |
| `params.offset?`        | `number`          | Optional offset on the items to get.               |
| `params.where?`         | `Where`           | Optional where clause to filter items by.          |
| `params.whereDocument?` | `WhereDocument`   | Optional where clause to filter items by.          |

#### Returns

`Promise`<`GetResponse`\>

- The response from the server.

---

### modify ([more details](https://docs.trychroma.com/js_reference/Collection#modify))

▸ **modify**(`params?`): `Promise`<`void`\>

Modify the collection name or metadata

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    name: "new collection name",
    metadata: { key: "value" },
};

return msg;
```

#### Parameters

| Name               | Type                 | Description                               |
| :----------------- | :------------------- | :---------------------------------------- |
| `params`           | `Object`             | The parameters for the query.             |
| `params.metadata?` | `CollectionMetadata` | Optional new metadata for the collection. |
| `params.name?`     | `string`             | Optional new name for the collection.     |

#### Returns

`Promise`<`void`\>

- The response from the API.

---

### peek ([more details](https://docs.trychroma.com/js_reference/Collection#peek))

▸ **peek**(`params?`): `Promise`<`GetResponse`\>

Peek inside the collection

**`Throws`**

If there is an issue executing the query.

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    limit: 10,
};

return msg;
```

#### Parameters

| Name            | Type     | Description                                           |
| :-------------- | :------- | :---------------------------------------------------- |
| `params`        | `Object` | The parameters for the query.                         |
| `params.limit?` | `number` | Optional number of results to return (default is 10). |

#### Returns

`Promise`<`GetResponse`\>

A promise that resolves to the query results.

---

### query ([more details](https://docs.trychroma.com/js_reference/Collection#query))

▸ **query**(`params`): `Promise`<`QueryResponse`\>

Performs a query on the collection using the specified parameters.

**`Throws`**

If there is an issue executing the query.

**`Example`**

```js
// Query the collection using embeddings
msg.collection = "my_collection";
msg.payload = {
    queryEmbeddings: [0.1, 0.2],
    nResults: 10,
    where: { key: "value" },
    include: ["metadata", "document"]
};

return msg;
```

**`Example`**

```js
// Query the collection using query text
msg.collection = "my_collection";
msg.payload = {
    queryTexts: "some text",
    nResults: 10,
    where: { key: "value" },
    include: ["metadata", "document"]
};

return msg;
```

#### Parameters

| Name                      | Type                        | Description                                                                           |
| :------------------------ | :-------------------------- | :------------------------------------------------------------------------------------ |
| `params`                  | `Object`                    | The parameters for the query.                                                         |
| `params.include?`         | `IncludeEnum`[]             | Optional array of fields to include in the result, such as "metadata" and "document". |
| `params.nResults?`        | `number`                    | Optional number of results to return (default is 10).                                 |
| `params.queryEmbeddings?` | `Embedding` \| `Embeddings` | Optional query embeddings to use for the search.                                      |
| `params.queryTexts?`      | `string` \| `string`[]      | Optional query text(s) to search for in the collection.                               |
| `params.where?`           | `Where`                     | Optional query condition to filter results based on metadata values.                  |
| `params.whereDocument?`   | `WhereDocument`             | Optional query condition to filter results based on document content.                 |

#### Returns

`Promise`<`QueryResponse`\>

A promise that resolves to the query results.

---

### update ([more details](https://docs.trychroma.com/js_reference/Collection#update))

▸ **update**(`params`): `Promise`<`boolean`\>

Update the embeddings, documents, and/or metadatas of existing items

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    ids: ["id1", "id2"],
    embeddings: [
        [1, 2, 3],
        [4, 5, 6],
    ],
    metadatas: [{ key: "value" }, { key: "value" }],
    documents: ["new document 1", "new document 2"],
};

return msg;
```

#### Parameters

| Name                 | Type                        | Description                     |
| :------------------- | :-------------------------- | :------------------------------ |
| `params`             | `Object`                    | The parameters for the query.   |
| `params.documents?`  | `string` \| `Documents`     | Optional documents to update.   |
| `params.embeddings?` | `Embedding` \| `Embeddings` | Optional embeddings to update.  |
| `params.ids`         | `string` \| `IDs`           | The IDs of the items to update. |
| `params.metadatas?`  | `Metadata` \| `Metadatas`   | Optional metadatas to update.   |

#### Returns

`Promise`<`boolean`\>

- The API Response. True if successful. Else, error.

---

### upsert ([more details](https://docs.trychroma.com/js_reference/Collection#upsert))

▸ **upsert**(`params`): `Promise`<`boolean`\>

Upsert items to the collection

**`Example`**

```js
msg.collection = "my_collection";
msg.payload = {
    ids: ["id1", "id2"],
    embeddings: [
        [1, 2, 3],
        [4, 5, 6],
    ],
    metadatas: [{ key: "value" }, { key: "value" }],
    documents: ["document1", "document2"],
};

return msg;
```

#### Parameters

| Name                 | Type                        | Description                              |
| :------------------- | :-------------------------- | :--------------------------------------- |
| `params`             | `Object`                    | The parameters for the query.            |
| `params.documents?`  | `string` \| `Documents`     | Optional documents of the items to add.  |
| `params.embeddings?` | `Embedding` \| `Embeddings` | Optional embeddings of the items to add. |
| `params.ids`         | `string` \| `IDs`           | IDs of the items to add.                 |
| `params.metadatas?`  | `Metadata` \| `Metadatas`   | Optional metadata of the items to add.   |

#### Returns

`Promise`<`boolean`\>

- The response from the API. True if successful.
