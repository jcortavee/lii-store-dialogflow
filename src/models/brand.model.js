module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
        id: {
            type: Sequelize.BIGINT
        },
        brand_name: {
            type: Sequelize.STRING
        },
    });
    return Brand;
};
