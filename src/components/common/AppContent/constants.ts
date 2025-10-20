const SUPERVISOR_BASE_ROUTE = '/supervisor/requests';
const EMPLOYEE_BASE_ROUTE = '/employee/requests';

export enum AppRoute {
    login = '/login',
    supervisorRequests = SUPERVISOR_BASE_ROUTE,
    supervisorRequestDetail = `${SUPERVISOR_BASE_ROUTE}/:id`,
    employeeRequests = EMPLOYEE_BASE_ROUTE,
    employeeRequestCreate = `${EMPLOYEE_BASE_ROUTE}/create`,
    employeeRequestDetail = `${EMPLOYEE_BASE_ROUTE}/:id`,
}