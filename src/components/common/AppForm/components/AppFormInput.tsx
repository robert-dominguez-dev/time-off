import { IonInput, IonItem, IonLabel } from '@ionic/react';
import { Control, Controller, FieldValues, RegisterOptions, useFormState } from 'react-hook-form';
import { AppColumn } from '../../AppView/AppColumn';
import type { FieldPath } from 'react-hook-form/dist/types/path';
import { appColors } from '../../../../constants/ui';

type AppFormInputProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> =
    Partial<Pick<HTMLIonInputElement, 'type' | 'placeholder' | 'label'>>
    & {
    name: TFieldName;
    control: Control<TFieldValues>;
    rules?: RegisterOptions<TFieldValues, TFieldName>;
};

export const AppFormInput = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  name,
  label,
  control,
  rules,
  type = 'text',
  placeholder,
}: AppFormInputProps<TFieldValues, TFieldName>) => {
  const { errors } = useFormState({ control });

  const errorMessage = errors[name]?.message?.toString();

  return (
    <IonItem>
      <AppColumn grow>
        {label && <IonLabel>{label}</IonLabel>}
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({
            field: {
              value,
              onChange,
              onBlur,
              disabled,
            },
          }) => (
            <IonInput
              value={value}
              onIonInput={e => onChange(e.detail.value)}
              onIonBlur={onBlur}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              clearInput
            />
          )}
        />
        {errorMessage && <span style={{ color: appColors.negative }}>{errorMessage}</span>}
      </AppColumn>
    </IonItem>
  );
};