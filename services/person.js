const db = require("./db");
const config = require("../config");

const getAll = async () => {
  const data = await db.query("SELECT * FROM `person`");

  return {
    data,
  };
};

const create = async (person) => {
  const result = await db.query(
    `INSERT INTO person (name, telephone, lastName, email, age, state, date) VALUES ("${person.name}", "${person.telephone}", "${person.lastName}", "${person.email}", ${person.age}, "${person.state}", CURRENT_TIMESTAMP)`
  );

  let message = "Error in creating person";

  if (result.affectedRows) {
    message = "Person created successfully";
  }

  return { message };
};

const update = async (id, person) => {
  const result = await db.query(
    `UPDATE person 
        SET name="${person.name}", telephone="${person.telephone}", lastName="${person.lastName}", email="${person.email}", age="${person.age}", state="${person.state}"
        WHERE id=${id}`
  );

  let message = "Error in updating person";

  if (result.affectedRows) {
    message = "Person updated successfully";
  }

  return { message };
};

module.exports = {
  getAll,
  create,
  update
};
