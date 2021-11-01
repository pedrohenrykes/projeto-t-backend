import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Employee from 'App/Models/Employee';

export default class EmployeeController {

    public async index ({ response }: HttpContextContract) {

        try {
            const employees = await Employee.all();
            return response.status(200).send(employees);
        } catch (error) {
            return response.status(204).send(error);
        }
    }

    public async show ({ request, response }: HttpContextContract) {

        const id = request.param('id');

        try {
            const employee = await Employee.findOrFail(id);
            return response.status(200).send(employee);
        } catch (error) {
            return response.status(204).send(error);
        }
    }

    public async store({ request, response }: HttpContextContract) {

        const data = request.only([
            'name',
            'birth',
            'ctps',
            'cpf',
            'rg',
            'ssp',
            'employee_category_id'
        ]);

        try {
            const employee = await Employee.create(data);
            return response.status(201).send(employee);
        } catch (error) {
            return response.status(204).send(error);
        }
    }

    public async update({ request, response }: HttpContextContract) {

        const id = request.param('id');

        const data = request.only([
            'name',
            'birth',
            'ctps',
            'cpf',
            'rg',
            'ssp',
            'employee_category_id'
        ]);

        try {

            const employee = await Employee.findOrFail(id);

            await employee.merge(data).save();

            return response.status(200).send(employee);

        } catch (error) {
            console.log(error);
            return response.status(204).send(error);
        }
    }

    public async destroy ({ request, response }: HttpContextContract) {

        const id = request.param('id');

        try {

            const employee = await Employee.findOrFail(id);

            await employee.delete();

            return response.status(200).send(employee);

        } catch (error) {
            return response.status(204).send(error);
        }
    }
}
