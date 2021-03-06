
exports.up = function(knex, Promise) {
  return knex.schema.table("activity", function (table) {
    table.integer("created_by").unsigned().references("clients.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("activity", function (table) {
    table.dropForeign("created_by");
  }).then(function() {
    return knex.schema.table("activity", function (table) {
      table.dropColumn("created_by");
    });
  });
};
