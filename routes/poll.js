const express = require('express');
const router = express.Router();
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1199493",
    key: "3276ab283063a4eb688c",
    secret: "3755f3a8432b7404bb58",
    cluster: "ap2",
    useTLS: true
  });

router.get('/',(req,res)=>{
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger("os-poll", "os-vote", {
        points: 1,
        os: req.body.os
      });
      return res.json({success: true, message: "Thank you for voting"});
});

module.exports = router;