export enum UserRole {
    employee = 'employee',
    supervisor = 'supervisor',
}

export type User = {
    username: string;
    name: string;
    role: UserRole;
};

export enum TimeOffType {
    vacation = 'vacation',
    sick = 'sick',
    personal = 'personal',
}

export enum TimeOffRequestStatus {
    pending = 'pending',
    approved = 'approved',
    rejected = 'rejected',
}

export type TimeOffRequest = {
    id: string;
    employeeUsername: string;
    startDate: string;
    endDate: string;
    type: TimeOffType;
    status: TimeOffRequestStatus;
    employeeNote?: string;
    supervisorNote?: string;
    createdAt: string;
};