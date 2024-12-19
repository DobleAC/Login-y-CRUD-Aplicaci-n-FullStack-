import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://admin:admin@dbeccomerce.wxzvv.mongodb.net/?retryWrites=true&w=majority&appName=dbeccomerce')
        console.log('>>> Conectado a la base de datos');
    }catch(error){
        console.log(error);
    }
};