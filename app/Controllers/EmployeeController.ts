import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ExceptionHandler from 'App/Exceptions/Handler';
import Employee from 'App/Models/Employee';

export default class EmployeeController {

    public async index ({ request, response }: HttpContextContract) {

        const id = request.param('id');

        try {

            if (id) {
                const employee = await Employee.find(id);
                return response.status(200).send(employee);
            }

            const employees = await Employee.all();
            return response.status(200).send(employees);

        } catch (error) {
            return response.status(500).send(error);
        }
    }

    public async store({ request, response }) {

    }
}
