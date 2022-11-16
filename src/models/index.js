import dbConfig from "../config/db.config.js";
import mongoose from "mongoose";
import TutorialSchema from "./tutorial.model.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = TutorialSchema(mongoose);

export default db;
