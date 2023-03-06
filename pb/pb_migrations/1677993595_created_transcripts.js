migrate((db) => {
  const collection = new Collection({
    "id": "hbv8hz8e1mpr9zs",
    "created": "2023-03-05 05:19:55.580Z",
    "updated": "2023-03-05 05:19:55.580Z",
    "name": "transcripts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fddvkvfs",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9105mdbx",
        "name": "episode_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "2wcagjo1ov4lk03",
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
  const collection = dao.findCollectionByNameOrId("hbv8hz8e1mpr9zs");

  return dao.deleteCollection(collection);
})
