var mongoose = require('mongoose');
var taskSchema =  mongoose.Schema({
    CONTENT : String

});

module.exports = mongoose.model('Task',taskSchema);