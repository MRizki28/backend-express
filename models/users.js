module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        'Users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                allowNull: false,
              },
              updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: false,
              },
        },
        {
            tableName: 
            'users',
        }
    );

    return Users
};