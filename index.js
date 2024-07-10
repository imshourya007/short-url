const express = require("express");
const { connectMongoDb } = require('./connect');
const URL = require('./models/url');
const urlRoute = require('./routes/url');
const app =  express();
const PORT = 8001;

connectMongoDb('mongodb://127.0.0.1:27017/short-url').then(()=>(console.log("MongoDB Connected..."))).catch((err) => console.log(err));

app.use(express.json());

app.use("/url", urlRoute);

app.use("/:shortId", async(req,res) =>{
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  },{$push: {
    visitHistory: {
      timestamp: Date.now()
    }
  },
  }
 );
  res.redirect(entry.redirectURL)
});


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

