migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hbv8hz8e1mpr9zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5tacw45",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "official",
        "user",
        "whisper"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hbv8hz8e1mpr9zs")

  // remove
  collection.schema.removeField("c5tacw45")

  return dao.saveCollection(collection)
})
