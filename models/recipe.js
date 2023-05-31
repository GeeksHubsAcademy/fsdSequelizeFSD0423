'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    time: DataTypes.INTEGER,
    pax: DataTypes.INTEGER,
    vegan: DataTypes.BOOLEAN,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};