const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

// models
const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  phoneNumber: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, defaultValue: null },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  sortdescription: { type: DataTypes.STRING, allowNull: false },
});

const Info = sequelize.define("info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  description: { type: DataTypes.STRING, allowNull: false },
});

const InfoTitle = sequelize.define("info_title", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const TypeCategory = sequelize.define("type_category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// relationships
User.hasOne(Basket); //one-to-one
Basket.belongsTo(User);

Basket.hasMany(BasketProduct); //one-to-many
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(Info, { as: "info" });
Info.belongsTo(Product);

Info.hasOne(InfoTitle);
InfoTitle.belongsTo(Info);

Type.hasMany(Product);
Product.belongsTo(Type);

Category.hasMany(Product);
Product.belongsTo(Category);

Type.belongsToMany(Category, { through: TypeCategory });
Category.belongsToMany(Type, { through: TypeCategory });

module.exports = {
  User,
  Basket,
  BasketProduct,
  Product,
  Info,
  InfoTitle,
  Type,
  Category,
  TypeCategory,
};
