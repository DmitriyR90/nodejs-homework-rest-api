const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');

mongoose.set('strictQuery', true);

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });

    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
