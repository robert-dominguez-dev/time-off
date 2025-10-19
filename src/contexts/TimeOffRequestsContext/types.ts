import { TimeOffRequest, TimeOffRequestStatus } from '../../types/models';

export enum TimeOffRequestsActionCode {
    addRequest = 'addRequest',
    updateRequestStatus = 'updateRequestStatus',
    deleteRequest = 'deleteRequest',
}

export type TimeOffRequestsAction =
    | { type: TimeOffRequestsActionCode.addRequest; payload: Omit<TimeOffRequest, 'id' | 'status' | 'createdAt'> }
    | {
    type: TimeOffRequestsActionCode.updateRequestStatus;
    payload: {
        id: string;
        status: TimeOffRequestStatus.approved | TimeOffRequestStatus.rejected;
        supervisorNote?: string
    }
}
    | { type: TimeOffRequestsActionCode.deleteRequest; payload: { id: string } };
