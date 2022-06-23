'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bids extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bids.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    requestPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bids',
    underscored: true,
  });
  return Bids;
};