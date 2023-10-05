import mongoose from "mongoose";

const {
  SWAPI_APP_MONGODB_HOST,
  SWAPI_APP_MONGODB_DATABASE,
  SWAPI_APP_MONGODB_PORT,
} = process.env;

const MONGOB_URI = `mongodb://${SWAPI_APP_MONGODB_HOST}:${SWAPI_APP_MONGODB_PORT}/${SWAPI_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGOB_URI);
