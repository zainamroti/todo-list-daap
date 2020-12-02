import mongoose from "mongoose"


async function connectToDB() {
    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    db.on('error', (err) => { console.log('connection error: ', err); });
    db.once('open', () => {
        // we're connected!
        console.log("We're Connected");
    });
}

export default connectToDB;
// export { isConnected };
