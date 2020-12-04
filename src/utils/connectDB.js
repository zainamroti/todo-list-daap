import mongoose from "mongoose"

mongoose.Promise = global.Promise;
// let isConnected;

// const serverOptions = 

// const replsetOptions =
async function connectToDB() {
    mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    const dbConn = mongoose.connection;
    // isConnected = dbConn.readyState;
    // console.log(isConnected)
    dbConn.on('error', (err) => { console.log('connection error: ', err); });
    dbConn.once('open', () => {
        // we're connected!
        console.log("We're Connected");
    });
}

export default connectToDB;
// export { isConnected };
