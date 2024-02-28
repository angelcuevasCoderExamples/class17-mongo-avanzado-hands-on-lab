const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const estudianteSchema = new mongoose.Schema({
    first_name:String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
})
estudianteSchema.plugin(mongoosePaginate)
const estudianteModel = mongoose.model('estudiantes', estudianteSchema);

module.exports = estudianteModel;