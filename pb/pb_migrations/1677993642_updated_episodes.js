migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "948du6uk",
    "name": "transcripts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "hbv8hz8e1mpr9zs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // remove
  collection.schema.removeField("948du6uk")

  return dao.saveCollection(collection)
})
