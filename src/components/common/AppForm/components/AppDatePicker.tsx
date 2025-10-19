import { Control, Controller, FieldValues, RegisterOptions, useFormState } from 'react-hook-form';
import { DatetimeChangeEventDetail, IonDatetime, IonDatetimeButton, IonItem, IonLabel, IonModal } from '@ionic/react';
import { AppColumn } from '../../AppView/AppColumn';
import { appColors } from '../../../../constants/ui';
import type { FieldPath } from 'react-hook-form/dist/types/path';
import { AppRow } from '../../AppView/AppRow';
import { format } from 'date-fns';
import { COMPLETE_DATE_FORMAT } from '../../../../constants/common';
import { IonDatetimeCustomEvent } from '@ionic/core/dist/types/components';

type AppDatePickerProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> =
    {
        label?: string;
        name: TFieldName;
        control: Control<TFieldValues>;
        rules?: RegisterOptions<TFieldValues, TFieldName>;
    };

export const AppDatePicker = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  name,
  label,
  control,
  rules,
}: AppDatePickerProps<TFieldValues, TFieldName>) => {
  const { errors } = useFormState({ control });
  const errorMessage = errors[name]?.message?.toString();

  return (
    <IonItem>
      <AppColumn grow>
        <AppRow alignItems={'center'} justifyContent={'space-between'}>
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
            }) => {
              const handleChange = (e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) => {
                const eventValue = e.detail.value;
                const newValue: string | undefined = typeof eventValue === 'string' ?
                  format(eventValue, COMPLETE_DATE_FORMAT) : undefined;
                onChange(newValue);
              };

              return (
                <>
                  <IonDatetimeButton
                    datetime={name}
                    defaultValue={value}
                    disabled={disabled}
                  />
                  <IonModal keepContentsMounted={true}>
                    <IonDatetime
                      id={name} presentation={'date'}
                      value={value}
                      onIonChange={handleChange}
                      onIonBlur={onBlur}
                    />
                  </IonModal>
                </>
              );
            }}
          />
        </AppRow>
        {errorMessage && <span style={{ color: appColors.negative }}>{errorMessage}</span>}
      </AppColumn>
    </IonItem>
  );
};
