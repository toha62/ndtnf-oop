import { connect } from 'mongoose';

async function start(DB_URL: string) {
  try {
    await connect(DB_URL, {
      dbName: 'library',
    });
    console.log('Mongoose connected');
  } catch (err) {
    console.log(err);
  }
}

const { DB_URL } = process.env;

start(DB_URL);
