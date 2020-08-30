"use strict";

const Database = use("Database");
const Father = use("App/Models/Father");

class FatherController {
  async add({ request, response }) {
    const father = new Father();

    const data = request.post();
    console.log(data);

    father.documentNumber = data.documentNumber;
    father.firstName = data.firstName;
    father.lastName = data.lastName;
    father.phone = data.phone;
    father.email = data.email;
    father.address = data.address;
    try {
      //Insert in DB
      await father.save();
      //Send response to server
      switch (father.id) {
        case father.id:
          console.log("Guardado");
          return response.created("201");
          break;
        case !father.id:
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

  async index({ request, response }) {
    return await Father.all()
  }
  // async update({ request, response }) {}
  // async delete({ request, response }) {}
}

module.exports = FatherController;
