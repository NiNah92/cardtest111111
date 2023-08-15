module.exports = ( sequelize, DataTypes ) => {
    const Car = sequelize.define('Car', {
      title: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      pictures: DataTypes.STRING,
      content: DataTypes.TEXT,
      catagori: DataTypes.STRING,
      price: DataTypes.STRING
    })
    return Car
  }
  