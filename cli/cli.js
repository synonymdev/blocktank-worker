'use strict'
const GrenacheClient = require('../src/Grenache/Client')
const config = require("./cmd.js")
const gc = new GrenacheClient({})

function main (name, method, params) {
  gc.send(name, {
    method,
    args: params
  }, (err, data) => {
    if(err) throw err
    console.log(JSON.stringify(data,null,2))
    process.exit()
  })
}
const args = process.argv


if (args.indexOf('-c') != -1) {
  const name = args[args.indexOf('-c') +1]
  const c = config[name]
  return main(c.svc,c.method, c.args)
}



const name = args[args.indexOf('-n') + 1]
const method = args[args.indexOf('-m') + 1]
const params = []
args.forEach((v, i) => {
  if (v === '-a') {
    params.push(args[i + 1])
  }
})
main(name, method, params)
