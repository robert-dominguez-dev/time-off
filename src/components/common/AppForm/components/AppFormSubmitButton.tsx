import { Control, FieldValues, useFormState } from 'react-hook-form';

import { IonButton } from '@ionic/react';

type AppFormSubmitButtonProps<TFieldValues extends FieldValues> = {
    control: Control<TFieldValues>;
    label: string;
}

export const AppFormSubmitButton = <TFieldValues extends FieldValues>({
  control,
  label,
}: AppFormSubmitButtonProps<TFieldValues>) => {
  const { isValid } = useFormState<TFieldValues>({ control });

  return (
    <IonButton
      type={'submit'}
      expand={'block'}
      disabled={!isValid}
    >
      {label}
    </IonButton>
  );
};
