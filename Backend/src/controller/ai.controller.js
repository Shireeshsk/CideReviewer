const aiservice = require('../services/ai.services')
module.exports.getReview = async (req,res)=>{
    const sk= req.body.code;
    if(!sk){
        return res.status(400).send("prompt is required")
    }
    const response = await aiservice(sk);
    res.send(response);
}