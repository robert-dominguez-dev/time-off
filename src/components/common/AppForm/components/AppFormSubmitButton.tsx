import { Control, FieldValues, useFormState } from 'react-hook-form';
import { AppButton, AppButtonProps } from '../../AppButton';

type AppFormSubmitButtonProps<TFieldValues extends FieldValues> = Pick<AppButtonProps, 'label'> & {
    control: Control<TFieldValues>,
}

export const AppFormSubmitButton = <TFieldValues extends FieldValues>({
  control,
  label,
}: AppFormSubmitButtonProps<TFieldValues>) => {
  const { isValid } = useFormState<TFieldValues>({ control });

  return (
    <AppButton
      type={'submit'}
      label={label}
      disabled={!isValid}
    />
  );
};
