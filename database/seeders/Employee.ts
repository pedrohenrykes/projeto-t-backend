import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Employee from 'App/Models/Employee';
import { EmployeeFactory } from 'Database/factories';

export default class EmployeeSeeder extends BaseSeeder {
  public async run () {
    const employees = await EmployeeFactory.createMany(10);
    await Employee.createMany(employees);
  }
}
