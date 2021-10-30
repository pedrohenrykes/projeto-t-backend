import Route from '@ioc:Adonis/Core/Route';

Route.get('/employee', 'EmployeeController.index');
Route.get('/employee/:id', 'EmployeeController.index');