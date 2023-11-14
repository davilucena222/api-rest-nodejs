import { Knex } from 'knex'

// modificar a tabela (criar tabela, campos, tipos...)
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// desfazer o que foi feito no método up
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
