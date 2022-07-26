const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true, enum: ['Breakfast', 'Lunch', 'Evening Snack', 'Dinner'] },
    foodItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem'}]
}, {
    timestamps: true
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;