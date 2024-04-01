import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB Connected Succesfully');
        })
        connection.on('error', (err) => { 'MongoDB Connected error. Please make sure DB is running' + err });
        process.exit();
    } catch (error) {
        console.log('Something went wrong');
        console.log(error);
    }
}