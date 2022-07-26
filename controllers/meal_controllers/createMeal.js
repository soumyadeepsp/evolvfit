const Meal = require('../../models/meal');

module.exports.create = async (req, res) => {
    console.log(req.body);
    const meal = await Meal.create(req.body);
    if (meal) {
        return res.send({"status": "success"});
    } else {
        return res.send({"status": "failure"});
    }
}