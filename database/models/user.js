"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Score, {
                foreignKey: "userId",
            });
        }
    }
    User.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
        profile_image_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        refresh_token: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "User",
    });
    return User;
};