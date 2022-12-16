const Sequelize =require('sequelize');
const sequelize = new Sequelize ('node-completed', 'root', 'Aa@nitin5856', {
    dialect:'mysql',
    host:'localhost'
})
module.exports =sequelize;

