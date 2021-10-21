import uuid from 'uuid/v4'
import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import EmployeeCategory from './EmployeeCategory'
import User from './User'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @beforeCreate()
  public static assignUuid(employee: Employee) {
    employee.registry = uuid()
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
  public sspId: number

  @belongsTo(() => EmployeeCategory)
  public employeeCategoryId: BelongsTo<typeof EmployeeCategory>

  @belongsTo(() => User)
  public createdBy: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @belongsTo(() => User)
  public updatedBy: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
