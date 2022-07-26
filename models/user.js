const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    calorieRequirement: { type: mongoose.Types.Decimal128, required: true },
    mealPlan: [{
        date: { type: Date, required: true },
        meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true }
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;