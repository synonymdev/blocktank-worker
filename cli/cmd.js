module.exports = {
  listInvoices: {
    svc: 'svc:ln',
    method: 'listInvoices',
    args: [
      {
        node_id: '0285fe8004139a4a276580b4a6018b25dba06abedf683b7107d18d5fb8f9d28e28'
      },
      {}
    ]
  },
  listPayments: {
    svc: 'svc:ln',
    method: 'listPayments',
    args: [
      {
        node_id: '0285fe8004139a4a276580b4a6018b25dba06abedf683b7107d18d5fb8f9d28e28'
      },
      {}
    ]
  },
  getHeightTransactions: {
    svc: 'svc:btc:blocks',
    method: 'getHeightTransactions',
    args: {
      height: process.env.HEIGHT
    }
  },
  getPendingPaymentOrders: {
    svc: 'svc:get_order',
    method: 'getPendingPaymentOrders',
    args:[{}]
  },

  processBlockPayments: {
    svc: 'svc:btc_address_watch',
    method: 'onNewBlock',
    args: [process.env.HEIGHT]
  }
}
