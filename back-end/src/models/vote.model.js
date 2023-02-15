import { DataTypes, Sequelize } from "sequelize";


const Votes = (sequelize, Sequelize) => {
  const VoteModel  = sequelize.define('votes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        joker_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        is_dislike: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },
        createAt: {
            type: DataTypes.DATE,
            default: Date.now()
        },
        updateAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },{
        timestamps: false
    });

    return VoteModel;
} 

export default Votes;