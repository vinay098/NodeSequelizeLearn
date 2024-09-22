import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Student extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public major!: string;
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
          },
          major: {
            type: new DataTypes.STRING(128),
            allowNull: false,
          },
    },
    {
        tableName: 'students',
        sequelize,
      }
);

export default Student;
