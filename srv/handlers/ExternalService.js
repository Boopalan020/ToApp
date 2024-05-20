const cds = require('@sap/cds');

/**
* Implementation for Risk Management service defined in ./risk-service.cds
*/
module.exports = cds.service.impl(async function() {

    const bupa = await cds.connect.to('API_BUSINESS_PARTNER');

    this.on('READ', 'Suppliers', async req => {
        return bupa.run(req.query);
    });

    this.after('READ', 'Suppliers', sup_data => {
        console.log("READing Suppliers", sup_data);
    });
});