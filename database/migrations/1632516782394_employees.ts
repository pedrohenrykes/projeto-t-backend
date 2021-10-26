import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import ForeignFields from '../helpers/ForeignFields'
import AuditoryFields from '../helpers/AuditoryFields'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      const foreignFields = new ForeignFields
      const auditoryFields = new AuditoryFields

      table.increments('id')
      table.uuid('registry').notNullable().unique()
      table.string('name')
      table.date('birth')
      table.string('ctps').unique()
      table.string('cpf').unique()
      table.string('rg')
      table.string('ssp', 2)
      table.integer('employee_category_id')

      table.unique(['rg', 'ssp'])

      auditoryFields.basics(table, true)
      foreignFields.foreign(table, 'employee_category_id', 'id', 'employees_categories')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
