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
      table.uuid('registry').unique()
      table.string('name')
      table.date('birth')
      table.string('ctps').unique()
      table.string('cpf').unique()
      table.string('rg')
      table.integer('ssp_id')
      table.integer('employee_category_id')

      table.unique(['rg', 'ssp_id'])

      auditoryFields.basics(table)
      foreignFields.foreign(table, 'employee_category_id', 'id', 'employees_categories')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
