import { ActionBarItem } from '../AppActionBar';

export const baseRouteMap = {
  login: '/login',
  supervisor: '/supervisor/requests',
  employee: '/employee/requests',
} as const;

export const employeeActionBarItems: ActionBarItem[] = [
  {
    tab: 'requests',
    href: baseRouteMap.employee,
    icon: 'list',
    label: 'My requests',
  },
  {
    tab: 'add',
    href: `${baseRouteMap.employee}/create`,
    icon: 'add',
    label: 'Create',
  },
];