import fs from 'fs';

var FILENAMEFEEDBACK="./mongo/feedback/feedback.txt";
var downloadFeedback=(req, res)=>{
    res.download(FILENAMEFEEDBACK);
}

var sendFeedback = (req, res) => {
    if (req.body.feedbackMsg){
        let options = {
            flags: 'a',
            autoClose: true
        },
        loggerFeedback = fs.createWriteStream(FILENAMEFEEDBACK, options);
        loggerFeedback.write(req.body.feedbackMsg);
    }
    
    res.json({message:'feedback sended'})
}

exports.sendFeedback = sendFeedback;
exports.downloadFeedback = downloadFeedback;