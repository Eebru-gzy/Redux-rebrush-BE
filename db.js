const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const  { connection } = await mongoose.connect('mongodb://localhost:27017/redux_rebrush', {
			useFindAndModify: false,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
    console.log(`Database connected at ${connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;