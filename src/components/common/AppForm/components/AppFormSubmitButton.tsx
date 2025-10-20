import { Control, FieldValues, useFormState } from 'react-hook-form';

import { IonButton } from '@ionic/react';
import { Color } from '@ionic/core';

type AppFormSubmitButtonProps<TFieldValues extends FieldValues> = {
    control: Control<TFieldValues>;
    label: string;
    color?: Color;
}

export const AppFormSubmitButton = <TFieldValues extends FieldValues>({
  control,
  label,
  color,
}: AppFormSubmitButtonProps<TFieldValues>) => {
  const { isValid } = useFormState<TFieldValues>({ control });

  return (
    <IonButton
      type={'submit'}
      expand={'block'}
      color={color}
      disabled={!isValid}
    >
      {label}
    </IonButton>
  );
};
