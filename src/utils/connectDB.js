import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => console.log('connection error: ', err));
db.once('open', function () {
    // we're connected!
    console.log("Connected");
});

export default db;
