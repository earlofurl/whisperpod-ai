migrate((db) => {
  const collection = new Collection({
    "id": "2icktgscgpr3mak",
    "created": "2023-03-05 05:13:27.446Z",
    "updated": "2023-03-05 05:13:27.446Z",
    "name": "series",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cnacmrgo",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qhslvlty",
        "name": "podcast_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "ziaq6ido980y366",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("2icktgscgpr3mak");

  return dao.deleteCollection(collection);
})
