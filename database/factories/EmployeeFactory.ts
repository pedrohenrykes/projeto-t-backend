import Factory from '@ioc:Adonis/Lucid/Factory';
import Employee from 'App/Models/Employee';
import EmployeeCategory from 'App/Models/EmployeeCategory';
import { DateTime } from 'luxon';

export const EmployeeFactory = Factory.define(Employee, ({ faker }) => {

    const birth = new Date(faker.date.past()).toISOString();

    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        birth: DateTime.fromISO(birth),
        ctps: faker.random.number(10000000000, 99999999999),
        cpf: faker.random.number(10000000000, 99999999999),
        rg: faker.random.number(100000000, 999999999),
        ssp: 'RN',
        employeeCategoryId: 1,
    }
}).build();