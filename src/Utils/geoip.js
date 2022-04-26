'use strict'
const { default: axios } = require('axios')

async function callAPI (ip, token) {
  try {
    const res = await axios.get(`https://ipinfo.io/${ip}?token=${token}`)
    return res.data
  } catch (err) {
    console.log('Failed to get ip: ', ip)
    console.log(err.message)
    return null
  }
}

module.exports = {
  namespace: 'geoip',
  getIpInfo: async (ip, token) => {
    const end = ip.includes(':') ? ip.indexOf(':') : ip.length
    const formatted = ip.substr(0, end)
    return callAPI(formatted, token)
  }
}
