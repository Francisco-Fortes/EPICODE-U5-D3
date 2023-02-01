import { DataTypes } from "sequelize";
import sequelize from "../../db";

const ProductsModel = sequelize.define("user", {
  // Parameters: Name for the Model + Options
  //It is Model & Schema at the same time
  product_id: {
    // type: DataTypes.UUID
    // gives you back a uniqueId
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("Phone", "TV"),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// {
//     "id": 1,
//     "createdAt": "DATE",
//     "updatedAt": "DATE",
// }

export default ProductsModel;
