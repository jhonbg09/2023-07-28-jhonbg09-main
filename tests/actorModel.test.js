const actorModel = require("../exercises/actorModel");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

actorModel(sequelize);
const { Actor } = sequelize.models;
const attributes = Actor.getAttributes();

describe("El modelo Actor", () => {
  it("Debe haber sido creado correctamente y con el nombre correcto", () => {
    expect(Actor).toBeDefined();
  });
  it("No debe generar automáticamente los atributos createdAt y updatedAt", () => {
    expect(attributes["createdAt"]).not.toBeDefined();
    expect(attributes["updatedAt"]).not.toBeDefined();
  });
});

describe("Los atributos del modelo...", () => {
  it("id: Un identificador único de tipo entero, con incremento automático y clave primaria.", () => {
    expect(attributes.id.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.id.primaryKey).toBe(true);
    expect(attributes.id.autoIncrement).toBe(true);
  });

  it("fullName: El nombre completo del actor, de tipo String y no puede ser nulo.", () => {
    expect(attributes.fullName.type instanceof DataTypes.STRING).toBe(true);
    expect(attributes.fullName.allowNull).toBe(false);
  });
  it("dateOfBirth: La fecha de nacimiento del actor, de tipo fecha sin la hora y no puede ser nulo.", () => {
    expect(attributes.dateOfBirth.type instanceof DataTypes.DATEONLY).toBe(
      true
    );
    expect(attributes.dateOfBirth.allowNull).toBe(false);
  });
  it("nationality: La nacionalidad del actor, de tipo cadena de texto y no puede ser nulo.", () => {
    expect(attributes.nationality.type instanceof DataTypes.STRING).toBe(true);
    expect(attributes.nationality.allowNull).toBe(false);
  });
  it("gender: El género del actor, de tipo ENUM con los valores 'male', 'female' u 'other', y no puede ser nulo.", () => {
    expect(attributes.gender.type instanceof DataTypes.ENUM).toBe(true);
    expect(attributes.gender.values.includes("male")).toBe(true);
    expect(attributes.gender.values.includes("female")).toBe(true);
    expect(attributes.gender.values.includes("other")).toBe(true);
    expect(attributes.gender.allowNull).toBe(false);
  });
  it("height: La altura del actor, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.height.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.height.allowNull).toBe(false);
  });
  it("biography: La biografía del actor, de tipo texto largo y puede ser nulo.", () => {
    expect(attributes.biography.type instanceof DataTypes.TEXT).toBe(true);
    expect(
      attributes.biography.allowNull == true ||
        attributes.biography.allowNull == undefined
    ).toBe(true);
  });
  it("isOscarWinner: Un indicador booleano que indica si el actor ha ganado un premio Oscar, con valor predeterminado en falso y no puede ser nulo.", () => {
    expect(attributes.isOscarWinner.type instanceof DataTypes.BOOLEAN).toBe(
      true
    );
    expect(attributes.isOscarWinner.defaultValue).toBe(false);
    expect(attributes.isOscarWinner.allowNull).toBe(false);
  });
});
