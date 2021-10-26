import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import EmployeeCategory from 'App/Models/EmployeeCategory';

export default class EmployeeCategorySeeder extends BaseSeeder {
  public async run () {
    await EmployeeCategory.createMany([
      { name: 'Tecelão' },
      { name: 'Espuleiro' },
      { name: 'Urdidor' },
    ])
  }
}
