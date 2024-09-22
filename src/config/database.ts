import { Sequelize } from "sequelize";

const sequalize = new Sequelize('student', 'root', '1234', {
    host: 'localhost',
    dialect:'mysql'
});

export default sequalize;