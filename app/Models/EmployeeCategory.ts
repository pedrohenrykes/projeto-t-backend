import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmployeeCategory extends BaseModel {

  public static table = 'employees_categories';

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public createdBy: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public updatedBy: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
