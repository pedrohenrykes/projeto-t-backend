import Route from '@ioc:Adonis/Core/Route';

Route.get('/employee', 'EmployeeController.index');
Route.get('/employee/:id', 'EmployeeController.show');
Route.post('/employee', 'EmployeeController.store');
Route.put('/employee/:id', 'EmployeeController.update');
Route.delete('/employee/:id', 'EmployeeController.destroy');
