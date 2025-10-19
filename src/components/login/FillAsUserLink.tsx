import { IonText } from '@ionic/react';
import { User, UserRole } from '../../types/models';

const roleToTextMap: Record<UserRole, string> = {
  [UserRole.employee]: 'Employee',
  [UserRole.supervisor]: 'Supervisor',
};

type FillAsUserLinkProps = {
    user: User,
    updateUserToForm: (username: string) => void
}

export const FillAsUserLink = ({ updateUserToForm, user: { username, role } }: FillAsUserLinkProps) => (
  <IonText color={'primary'} onClick={() => updateUserToForm(username)}>
    {username} - {roleToTextMap[role]}
  </IonText>
);