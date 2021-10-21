import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import AuditoryFields from '../helpers/AuditoryFields'

export default class EmployeesCategories extends BaseSchema {
  protected tableName = 'employees_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      const auditoryFields = new AuditoryFields

      table.increments('id')
      table.string('name')

      auditoryFields.basics(table)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
