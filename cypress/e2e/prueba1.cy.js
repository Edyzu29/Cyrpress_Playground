const Avj = require("ajv");
const avj = new Avj();

const schema_body = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Generated schema for Root",
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    image_id: {
      type: "string",
    },
    sub_id: {
      type: "string",
    },
    created_at: {
      type: "string",
    },
    value: {
      type: "number",
    },
    country_code: {
      type: "string",
    },
    image: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  required: [
    "id",
    "image_id",
    "sub_id",
    "created_at",
    "value",
    "country_code",
    "image",
  ],
};

const vaidate = avj.compile(schema_body);

const email_format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

describe("exite_pagina", () => {
  it("abrir", () => {
    cy.request({
      method: "get",
      headers: {
        "x-api-key":
          "live_8xejLzKfqjXm6IrEARxZt7AIwQu5S60tf3Fx3qYWemkDCuRUBFl4ZRJ2OE2ohLjq",
      },
      url: "votes",
    }).then((respuesta) => {
      const body = respuesta.body[0];
      const id_body = respuesta.body[0].id;
      const status = respuesta.status;
      console.log(body);
      expect(status).to.eq(200);
      expect(id_body).to.be.a("number");

      const isvalidate = vaidate(body);
      expect(isvalidate).to.be.true;
    });
  });
});

describe("mongodb_test", () => {
  it("Comprobar", () => {
    cy.findOne({ name: "Mercedes Tyler" }).then((result) => {
      const email = result.email;

      expect(email).match(email_format, "el email tiene el formato correcto");
    });
  });
});
