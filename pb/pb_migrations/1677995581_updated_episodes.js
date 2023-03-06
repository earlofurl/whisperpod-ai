migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nidzmvhz",
    "name": "created_by_user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2wcagjo1ov4lk03")

  // remove
  collection.schema.removeField("nidzmvhz")

  return dao.saveCollection(collection)
})
