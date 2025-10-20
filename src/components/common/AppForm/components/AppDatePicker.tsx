import { Control, Controller, FieldValues, RegisterOptions, useFormState } from 'react-hook-form';
import { DatetimeChangeEventDetail, IonDatetime, IonDatetimeButton, IonItem, IonLabel, IonModal } from '@ionic/react';
import { AppColumn } from '../../AppView/AppColumn';
import { appColors } from '../../../../constants/ui';
import type { FieldPath } from 'react-hook-form/dist/types/path';
import { AppRow } from '../../AppView/AppRow';
import { IonDatetimeCustomEvent } from '@ionic/core/dist/types/components';
import { subMinutes } from 'date-fns';

type AppDatePickerProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>> =
    {
        label?: string;
        name: TFieldName;
        control: Control<TFieldValues>;
        rules?: RegisterOptions<TFieldValues, TFieldName>;
        min?: string;
        max?: string;
    };

export const AppDatePicker = <TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>>({
  name,
  label,
  control,
  rules,
  min,
  max,
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
                /**
                                 * Despite we give to the date picker ISO string with timezone,
                                 * it returns string without it,
                                 * so we need to take care of it manually...
                                 */
                const dateValue = e.detail.value;

                if (typeof dateValue !== 'string') {
                  return undefined;
                }

                const localDateWithIncorrectTimezone = new Date(dateValue);
                const timezoneOffsetMinutes = localDateWithIncorrectTimezone.getTimezoneOffset();
                const isoDateStringWithCorrectedTimezone = subMinutes(localDateWithIncorrectTimezone, timezoneOffsetMinutes).toISOString();

                onChange(isoDateStringWithCorrectedTimezone);
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
                      id={name}
                      value={value}
                      min={min}
                      max={max}
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
