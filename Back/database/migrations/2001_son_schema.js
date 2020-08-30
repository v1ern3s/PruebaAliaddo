"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SonSchema extends Schema {
  up() {
    this.create("sons", (table) => {
      table.increments();
      table.string("documentNumber").notNullable().unique();
      table.string("firstName").notNullable();
      table.string("lastName").notNullable();
      table.string("phone").notNullable();
      table.string("email").notNullable();
      table.string("address").notNullable();
      table
        .integer("father_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("fathers");
      table.timestamps();
    });
  }

  down() {
    this.drop("sons");
  }
}

module.exports = SonSchema;
