import Sequelize from 'sequelize';
import UserModel from './user.model.js';
import JokerModel from './joker.model.js';
import VoteModel from './vote.model.js';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_DB,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const connectDB = {};
connectDB.Sequelize = Sequelize;
connectDB.sequelize = sequelize;

connectDB.users = UserModel(sequelize, Sequelize);
connectDB.jokers = JokerModel(sequelize, Sequelize);
connectDB.votes = VoteModel(sequelize, Sequelize);

// votes-users
connectDB.users.belongsTo(connectDB.votes);
connectDB.votes.hasMany(connectDB.users, { foreinKey: 'user_id' });

// votes-jokers
connectDB.jokers.belongsTo(connectDB.votes);
connectDB.votes.hasMany(connectDB.jokers, { foreinKey: 'joker_id' });

export default connectDB;