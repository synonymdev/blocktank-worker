'use strict'

const { MongoClient, ObjectId } = require('mongodb')
let _db = null

function getDb (config, cb) {
  const url = config.db_url
  const dbName = 'Lighthouse'
  MongoClient.connect(url || "mongodb://0.0.0.0:27017/", { useUnifiedTopology: true }, async function (err, client) {
    if (err) throw err
    const db = client.db(dbName)
    _db = {
      db,
      LnChannelOrders: db.collection('LnChannelOrders'),
      Inventory: db.collection('Inventory'),
      BtcAddress: db.collection('BtcAddress'),
      LightningPeers: db.collection('LightningPeers'),
      LightningPeerGroups: db.collection('LightningPeerGroups'),
      LightningPeerLog: db.collection('LightningPeerLog'),
      LightningFwdEvent: db.collection('LightningFwdEvent'),
      ObjectId
    }
    cb(null, _db)
  })
}

module.exports = (config, cb) => {
  return new Promise((resolve, reject) => {
    if (_db) {
      return cb ? cb(null, _db) : resolve(_db)
    }
    getDb(config, (err, db) => {
      if (err) {
        return cb ? cb(err) : reject(err)
      }
      cb ? cb(null, db) : resolve(db)
    })
  })
}
