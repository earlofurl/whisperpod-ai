migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hbv8hz8e1mpr9zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mwcyzdp7",
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
  const collection = dao.findCollectionByNameOrId("hbv8hz8e1mpr9zs")

  // remove
  collection.schema.removeField("mwcyzdp7")

  return dao.saveCollection(collection)
})
