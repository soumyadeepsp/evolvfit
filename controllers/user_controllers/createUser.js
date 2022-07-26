const User = require('../../models/user');

module.exports.create = async (req, res) => {
    const user = await User.create(req.body);
    if (user) {
        return res.send({"status": "success"});
    } else {
        return res.send({"status": "failure"});
    }
}