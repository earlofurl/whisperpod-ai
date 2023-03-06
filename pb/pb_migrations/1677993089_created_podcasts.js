migrate((db) => {
  const collection = new Collection({
    "id": "ziaq6ido980y366",
    "created": "2023-03-05 05:11:29.137Z",
    "updated": "2023-03-05 05:11:29.137Z",
    "name": "podcasts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gymhhmrp",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ziaq6ido980y366");

  return dao.deleteCollection(collection);
})
