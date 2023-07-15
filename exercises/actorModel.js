// Para este ejericicio debes llevar adelante la implemetación de la siguiente función.
// Esta recibirá una instancia de Sequelize, y a la misma debes definirle un modelo siguiendo
// estas indicaciones:

// NOMBRE DEL MODELO: Actor

// - id: Un identificador único de tipo entero, con incremento automático y clave primaria.
// - fullName: El nombre completo del actor, de tipo String y no puede ser nulo.
// - dateOfBirth: La fecha de nacimiento del actor, de tipo fecha sin la hora y no puede ser nulo.
// - nationality: La nacionalidad del actor, de tipo String y no puede ser nulo.
// - gender: El género del actor, de tipo ENUM con los valores "male", "female" u "other", y no puede ser nulo.
// - height: La altura del actor, de tipo entero y no puede ser nulo.
// - biography: La biografía del actor, de tipo texto largo y puede ser nulo.
// - isOscarWinner: Un indicador booleano que indica si el actor ha ganado un premio Oscar, con valor predeterminado en falso y no puede ser nulo.

// Asimismo, no queremos que se generen automáticamente los campos createdAt y updatedAt

// Recuerda que necesitarás hacer la importación correspondiente para poder utilizar los tipos de datos de Sequelize

// Documentación con la que puedes guiarte: https://sequelize.org/docs/v6/core-concepts/model-basics/



const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Actor = sequelize.define('Actor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isOscarWinner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return Actor;
};
