'use strict'

const Link = require('grenache-nodejs-link')
const { PeerRPCClient } = require('grenache-nodejs-http')

module.exports = class Client {
  constructor (config = {}) {
    if (config.test_env) return false
    const link = new Link({
      grape: config.grape || 'http://127.0.0.1:30001'
    })
    link.start()

    this.peer = new PeerRPCClient(link, {})
    this.peer.init()
  }

  //
  // Call another worker
  // @name: Name of the worker
  // @params.method: Method of the worker
  // @params.args: arguments passed to the worker
  send (name, params, cb) {
    const fn = cb || function (err) {
      if (err) throw err
    }
    this.peer.request(name, params, { timeout: 10000 }, fn)
  }

  createNotifier (name, swarmId, p1) {
    return (p2, cb) => {
      this.send(name, { params: { ...p1, ...p2 }, swarm_id: swarmId }, cb)
    }
  }
}
