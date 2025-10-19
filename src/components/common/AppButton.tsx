import { IonButton } from '@ionic/react';

export type AppButtonProps = Pick<HTMLIonButtonElement, 'type' | 'disabled' | 'color'> & {
    label: string,
}

export const AppButton = ({
  label,
  type,
  disabled,
  color,
}: AppButtonProps) => (
  <IonButton
    expand={'block'}
    type={type}
    disabled={disabled}
    color={color}
  >
    {label}
  </IonButton>
);
