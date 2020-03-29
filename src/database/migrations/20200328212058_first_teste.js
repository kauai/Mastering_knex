
exports.up = function(knex) {
    return knex.schema.createTable("City", function(t) {
        t.increments("id").primary();
     
        t.string("cityName").notNullable();
        t.string("state").notNullable();
        t.string("country").defaultsTo("US");
     
        t.timestamp("createdAt", { useTz: true });
        t.timestamp("updatedAt", { useTz: true });
      });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("City"); 
};
