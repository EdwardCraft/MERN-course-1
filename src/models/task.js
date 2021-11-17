//Model of the data base

//will requiere to model the data
const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true}
});

//Task: como  utilizarlo 
//TaskSchema: como es el modelo
module.exports = mongoose.model('Task',TaskSchema);