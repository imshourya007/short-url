const express = require('express');
const {handlegenetareNewShortURL,
      handleGetAnalytics,
      handleRedirectToURL} = require('../controllers/url');
const router = express.Router();

router.post('/',handlegenetareNewShortURL);

router.get('/:shortId', handleRedirectToURL);

router.get('/analytics/:shortId',handleGetAnalytics);

module.exports = router;