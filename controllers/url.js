const URL = require('../models/url');

async function handlegenetareNewShortURL(req, res){
  const body = req.body;
  if(!body.url)
    return res.status(400).json({error: 'URL is required'});
  const { nanoid } = await import('nanoid');

  const shortID = nanoid(8);
  
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistor: [],
  });
  return res.json({id: shortID});
}
async function handleRedirectToURL(req,res){
  console.log(req.params);
  const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
      shortId,
    },{$push: {
      visitHistory: {
        timestamp: Date.now()
      }
    },
    }, { new: true }
   );
    res.redirect(entry.redirectURL)
}
async function handleGetAnalytics(req, res){
  console.log(req.params);
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  if(!result)
    return res.status(404).json({error: 'URL not found'});
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  })
}

module.exports = {
  handlegenetareNewShortURL,
  handleGetAnalytics,
  handleRedirectToURL,
}