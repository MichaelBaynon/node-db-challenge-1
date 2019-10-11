exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("project_id");
     
      tbl
        .text("project_name", 128)
        .unique()
        .notNullable();
      tbl.text("project_description", 255);
      tbl.boolean("completed").notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments("task_id");
      tbl.text('task_description').notNullable()
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl.unique(["project_id"]);

      tbl
        .integer("project_name")

        .notNullable()
        .references("project_name")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("project_description")

        
        .references("project_description")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.string("notes");
      tbl.boolean("completed").notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments("resource_id");
      tbl.string("resource_name").notNullable().unique()
      tbl.text("resource_description");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("tasks").dropTableIfExists("resources");
};
