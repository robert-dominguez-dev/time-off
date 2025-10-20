import { TimeOffRequestStatus, TimeOffType } from '../../../../types/models';
import { Color } from '@ionic/core';

export const timeOffTypeToTextMap: Record<TimeOffType, string> = {
  [TimeOffType.vacation]: 'Vacation',
  [TimeOffType.sick]: 'Sick',
  [TimeOffType.personal]: 'Personal',
};

export const timeOffStatusToTextMap: Record<TimeOffRequestStatus, string> = {
  [TimeOffRequestStatus.pending]: 'Pending',
  [TimeOffRequestStatus.approved]: 'Approved',
  [TimeOffRequestStatus.rejected]: 'Rejected',
};

export const timeOffStatusToTextColorMap: Record<TimeOffRequestStatus, Color> = {
  [TimeOffRequestStatus.pending]: 'medium',
  [TimeOffRequestStatus.approved]: 'success',
  [TimeOffRequestStatus.rejected]: 'danger',
};