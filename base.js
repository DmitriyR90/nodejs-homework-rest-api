// dmitriy
// QzyEagVCDOLSpEjW
// mongodb+srv://dmitriy:<password>@cluster0.bu7zp2s.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose');
const DB_HOST =
  'mongodb+srv://dmitriy:QzyEagVCDOLSpEjW@cluster0.bu7zp2s.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connection successful'))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
