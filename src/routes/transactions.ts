import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions').select('*')

    // const transactions = await knex('transactions').insert({
    //   id: randomUUID(),
    //   title: 'Teste',
    //   amount: 1000,
    // })

    return transactions
  })
}
