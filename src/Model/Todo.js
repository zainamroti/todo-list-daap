import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        isRequired: true,
    },
    isChecked: {
        type: Boolean,
        default: false,
    },
})

//Creates a collection named Todo with above schema(structure of collection)
//Compiles a schema into a model(class)
//This class is used to construct Documents(JSON Object: as rows of collections)
// const Todo = mongoose.model("Todo", todoSchema);

module.exports = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
