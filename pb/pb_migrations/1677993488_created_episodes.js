migrate((db) => {
  const collection = new Collection({
    "id": "2wcagjo1ov4lk03",
    "created": "2023-03-05 05:18:08.921Z",
    "updated": "2023-03-05 05:18:08.921Z",
    "name": "episodes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdycryaq",
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
        "id": "ewak5wyz",
        "name": "number_series",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "vvtstlx3",
        "name": "number_overall",
        "type": "number",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yhjuoiie",
        "name": "release_date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "qlqfmocq",
        "name": "description",
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
        "id": "aefkugn3",
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
      },
      {
        "system": false,
        "id": "oazodtph",
        "name": "series_id",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "2icktgscgpr3mak",
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
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03");

  return dao.deleteCollection(collection);
})
