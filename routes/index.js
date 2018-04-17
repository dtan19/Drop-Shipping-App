var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shipping Method1', name: 'Some zone' });
});

module.exports = router;


//const shipCart = 'object'; /* Shopify shipping cart object. */
//const handlePrice = 'handle'; /* Shopify shipping price object. */
//const shipPrice = 'price'; /* Shopify shipping price object. */
// const productInternal = 'tag a' /* Shopify products that have been tagged with tag A. */
// const productExternal = 'tag b' /* Shopify products that have been tagged with tag b. */
// const splitShip = ''; /* Shopify products with items tagged a and b. */
// const jointShip = ''; /* Shopify products with items only tagged a or b. */
// const cartShip = 'productInternal' + 'productExternal';
//
// const shipRateStandard = '';
// const shipRateExpedited = '';
// const dropShipStandard = '';
// const dropShipExpedited = '';
// const calcShip = '';




