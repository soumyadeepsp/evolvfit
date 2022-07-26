const Meal = require('../../models/meal');

module.exports.update = async (req, res) => {
    console.log(req.body);
    const newMeal = await Meal.findOneAndUpdate({name: req.body.name}, req.body);
    if (newMeal) {
        return res.send({"status": "success"});
    } else {
        return res.send({"status": "failure"});
    }
}