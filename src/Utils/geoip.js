'use strict'
const { default: axios } = require('axios')

async function callAPI (ip) {
  try {
    const res = await axios.get('https://freegeoip.live/json/'+ip)
    return res.data
  } catch (err) {
    console.log('Failed to get ip: ', ip)
    console.log(err.message)
    return null
  }
}

module.exports =  {
  namespace:"geoip",
  getIpInfo: async (ip)=>{
    const end = ip.includes(":") ?  ip.indexOf(":") : ip.length
    const formatted = ip.substr(0, end)
    return callAPI(formatted)
  },
};
