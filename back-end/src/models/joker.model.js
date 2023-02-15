import { DataTypes, Sequelize } from "sequelize";


const Jokers = (sequelize, Sequelize) => {
  const JokerModel  = sequelize.define('jokers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: false,
            // validate:
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

    return JokerModel;
} 

export default Jokers;