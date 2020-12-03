import mongoose from "mongoose"

mongoose.Promise = global.Promise;
let isConnected;

async function connectToDB() {
    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    isConnected = db.readyState;
    console.log(isConnected)
    db.on('error', (err) => { console.log('connection error: ', err); });
    db.once('open', () => {
        // we're connected!
        console.log("We're Connected");
    });

}

export default connectToDB;
export { isConnected };
