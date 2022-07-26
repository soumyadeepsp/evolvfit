const FoodItem = require('../../models/foodItem');

module.exports.addFoodItem = async (req, res) => {
    function capitalizeFirstLetter(input) {  
        let words = input.split(' ');  
        let CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    }
    req.body.name = capitalizeFirstLetter(req.body.name);
    const foodItem = await FoodItem.create(req.body);
    if (foodItem) {
        return res.send({"status": "success"});
    } else {
        return res.send({"status": "failure"});
    }
}