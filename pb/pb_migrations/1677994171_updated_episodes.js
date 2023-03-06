migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewak5wyz",
    "name": "number_series",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
