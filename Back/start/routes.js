'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


// Grouped
Route.group(() => {
  Route.post('add', 'FatherController.add')
  Route.get('index', 'FatherController.index')
  // Route.put('update', 'FatherController.update')
  // Route.delete('delete', 'FatherController.delete')
}).prefix('father')

// Grouped
Route.group(() => {
  Route.post('add', 'SonController.add')
  Route.get('index/:id', 'SonController.index')
  // Route.put('update', 'SonController.update')
  // Route.delete('delete', 'SonController.delete')
}).prefix('son')
