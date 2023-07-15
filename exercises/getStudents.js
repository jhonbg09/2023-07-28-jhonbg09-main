// getStudents

// En esta función debes realizar una consulta a un modelo.
// La función en la que trabajarás recibe por parámetro el modelo Student que define datos de estudiantes.
// La función debe consultar a ese modelo de forma tal que obtenga todos los registros cuyo valor del atributo "age"
// sea mayor a 20.

// Por si lo encuentras necesario, te dejamos la estructura de cómo está definido el modelo

//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   }

// Documentación con la que puedes guiarte: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  
  const { Op } = require("sequelize");

module.exports = async (Student) => {
  // Tu código aquí
  try {
    const students = await Student.findAll({
      where: {
        age: {
          [Op.gt]: 20,
        },
      },
    });

    console.log('Estudiantes mayores a 20 años:', students);
  } catch (error) {
    console.error('Error al obtener los estudiantes:', error);
  }
};

  
