import { DateTime } from 'luxon';
import { BaseModel, beforeCreate, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import EmployeeCategory from './EmployeeCategory';
import User from './User';
import { v4 as uuidv4 } from 'uuid';

export default class Employee extends BaseModel {

  public static table = 'employees';

  @column({ isPrimary: true })
  public id: number

  @column()
  public registry: string
  @beforeCreate()
  public static assignUuid(employee: Employee) {
    employee.registry = uuidv4()
  }

  @column()
  public name: string

  @column.date()
  public birth: DateTime

  @column()
  public ctps: string

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public ssp: string

  @column()
  public employeeCategoryId: number
  @belongsTo(() => EmployeeCategory, { foreignKey: 'employeeCategoryId' })
  public employeeCategory: BelongsTo<typeof EmployeeCategory>

  @column()
  public createdBy: number
  @belongsTo(() => User, { foreignKey: 'createdBy' })
  public creator: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public updatedBy: number
  @belongsTo(() => User, { foreignKey: 'updatedBy' })
  public updater: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
