const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    calories: { type: mongoose.Types.Decimal128 },
    protein: { type: mongoose.Types.Decimal128 },
    carb: { type: mongoose.Types.Decimal128 },
    fat: { type: mongoose.Types.Decimal128 },
    acceptedUnits: [{type: String, enum: ['ml', 'liter', 'kg', 'g', 'item']}],
    itemWeight: { type: mongoose.Types.Decimal128 }
}, {
    timestamps: true
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;