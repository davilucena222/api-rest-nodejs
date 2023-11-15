// arquivo com extensão do tipo .d.ts é uma definição de tipos basicamente (apenas código typescript)

// eslint-disabled-next-line
import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
