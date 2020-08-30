"use strict";

const Database = use("Database");
const Son = use("App/Models/Son");
const Father = use("App/Models/Father");

class SonController {
  async add({ request, response }) {
    const son = new Son();

    const data = request.post();

    son.documentNumber = data.documentNumber;
    son.firstName = data.firstName;
    son.lastName = data.lastName;
    son.phone = data.phone;
    son.email = data.email;
    son.address = data.address;
    son.father_id = data.father_id;
    try {
      await son.save();

      switch (son.id) {
        case son.id:
          console.log("Guardado");
          return response.created("201");
          break;
        case !son.id:
          console.log("No guardado");
          return response.notModified("304");
          break;

        default:
          return response.notModified("304");
          break;
      }
    } catch (error) {
      console.log(error);
      const saveError = error;
      response.internalServerError("500");
    }
  }
  async index({ request, response, params }) {
    const data = params.id;
    return await Son.query().where("father_id", "=", data).fetch();
  }
  // async update({ request, response }) {}
  // async delete({ request, response }) {}
}

module.exports = SonController;
