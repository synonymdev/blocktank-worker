const NODE_ID = '0202e039470cf1c484dad7a6d24752b1144f740384473e399f2a057e69894eadea'
module.exports = {
  listInvoices: {
    svc: 'svc:ln',
    method: 'listInvoices',
    args: [
      {
        node_id: NODE_ID
      },
      {}
    ]
  },
  listChannels: {
    svc: 'svc:ln',
    method: 'listChannels',
    args: [
      {},
      {}
    ]
  },
  listPayments: {
    svc: 'svc:ln',
    method: 'listPayments',
    args: [
      {
        node_id: NODE_ID
      },
      {}
    ]
  },
  updateRoutingFee: {
    svc: 'svc:ln',
    method: 'updateRoutingFees',
    args: [
      {
        transaction_id: '48bec6015de2e7f9c83ccda1474eba9af2f16c83dc4467a420ff01e866cbce9b',
        transaction_vout: 1,
        fee_rate: 8000
      }
    ]
  },
  getHeightTransactions: {
    svc: 'svc:btc:blocks',
    method: 'getHeightTransactions',
    args: {
      height: process.env.HEIGHT
    }
  },
  getBtcUsd: {
    svc: 'svc:exchange_rate',
    method: 'getBtcUsd',
    args: {
      sats: 100000000
    }
  },
  getPendingPaymentOrders: {
    svc: 'svc:get_order',
    method: 'getPendingPaymentOrders',
    args: [{}]
  },

  processBlockPayments: {
    svc: 'svc:btc_address_watch',
    method: 'onNewBlock',
    args: [process.env.HEIGHT]
  },

  createAuthUser: {
    svc: 'svc:simple_auth',
    method: 'createUser',
    args: {
      password:"ÂDîb{³_×¹)2»±uÊxm;áÏàç°Î?Âÿ",
      username:"jay"
    }
  },

  amlFiatCapactyCheck: {
    svc: 'svc:channel_aml',
    method: 'amlFiatCapactyCheck',
    args: [{
      node_public_key: '02082a2b0d8cd2c10d87ffd7a7976dc5fb7cc8894f39f62b00ff15ca6edb609b0f',
      order: {
        remote_balance: 100000000000,
        local_balance: 100000000000
      }
    }]
  },
  newHtlcForward: {
    svc: 'svc:ln:router',
    method: 'newHtlcForward',
    args: [{
      at: '2022-02-01T02:34:47.149Z',
      in_channel: '964x1x0',
      in_payment: 0,
      is_confirmed: true,
      is_failed: false,
      is_receive: false,
      is_send: false,
      out_channel: '778x1x0',
      out_payment: 10
    }]
  }
}
