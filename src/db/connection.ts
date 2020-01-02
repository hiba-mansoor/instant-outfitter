import mongoose from 'mongoose';
mongoose.connect(process.env.connection_string, {useNewUrlParser: true});

export const db = mongoose.connection;
