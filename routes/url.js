const express = require('express');
const {handlegenetareNewShortURL,
      handleGetAnalytics} = require('../controllers/url');
const router = express.Router();

router.route('/').post(handlegenetareNewShortURL);

router.route('/analytics/:stortId').get(handleGetAnalytics);

module.exports = router;