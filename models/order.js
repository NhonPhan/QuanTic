module.exports = function(sequelize, DataTypes) {
  return sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    order_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
