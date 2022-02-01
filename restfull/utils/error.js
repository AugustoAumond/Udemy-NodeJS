module.exports = {
    send: (err, req, res, code = 400)=> {
        console.log(`err: ${err}`)
        res.status(400).json({
        error: err
        });    
    }
};