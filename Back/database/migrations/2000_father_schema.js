"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FatherSchema extends Schema {
  up() {
    this.create("fathers", (table) => {
      table.increments();
      table.string("documentNumber").notNullable().unique();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("phone").notNullable();
      table.string("email").notNullable();
      table.string("address").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("fathers");
  }
}

module.exports = FatherSchema;
