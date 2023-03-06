migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2icktgscgpr3mak")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3mdhxe30",
    "name": "added_by_user",
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
  const collection = dao.findCollectionByNameOrId("2icktgscgpr3mak")

  // remove
  collection.schema.removeField("3mdhxe30")

  return dao.saveCollection(collection)
})
