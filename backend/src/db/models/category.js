'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    CategoryID: DataTypes.INTEGER,
    CategoryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: true
  });
  return Category;
};