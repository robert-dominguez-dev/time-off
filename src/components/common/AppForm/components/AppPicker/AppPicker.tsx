import {
  IonButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonModal,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonToolbar,
} from '@ionic/react';
import { AppColumn } from '../../../AppView/AppColumn';
import { AppRow } from '../../../AppView/AppRow';
import { Control, Controller, FieldValues, RegisterOptions, useFormState } from 'react-hook-form';
import { appColors } from '../../../../../constants/ui';
import type { FieldPath } from 'react-hook-form/dist/types/path';
import { useRef } from 'react';
import './AppPicker.css';

export type AppPickerItem<TValue extends string> = {
    label: string;
    value: TValue;
}

type AppPickerProps<TFieldValues extends FieldValues, TFieldName extends FieldPath<TFieldValues>, TValue extends string> = {
    items: AppPickerItem<TValue>[];
    label?: string;
    name: TFieldName;
    control: Control<TFieldValues>;
    rules?: RegisterOptions<TFieldValues, TFieldName>;
}

export const AppPicker = <
    TFieldValues extends FieldValues,
    TFieldName extends FieldPath<TFieldValues>,
    TValue extends string
>({
    items,
    name,
    label,
    control,
    rules,
  }: AppPickerProps<TFieldValues, TFieldName, TValue>) => {
  const modal = useRef<HTMLIonModalElement>(null);

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
                disabled,
              },
            }) => {
              const selectedItem = items.find(item => item.value === value);
              const buttonLabel = selectedItem?.label || 'Select';
              return (
                <>
                  <IonButton
                    id={name}
                    disabled={disabled}
                  >
                    {buttonLabel}
                  </IonButton>
                  <IonModal
                    ref={modal}
                    trigger={name}
                    isOpen={false}
                    onDidDismiss={({ detail }) => console.log('didDismiss', JSON.stringify(detail))}
                  >
                    <IonToolbar>
                      <IonButtons slot="end">
                        <IonButton
                          onClick={() => modal.current?.dismiss(value, 'confirm')}
                        >
                          Done
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                    <IonPicker>
                      <IonPickerColumn
                        value={value}
                        onIonChange={({ detail }) => onChange(detail.value)}
                        disabled={disabled}
                      > {
                          items.map(({ label, value }) => (
                            <IonPickerColumnOption
                              key={label}
                              value={value}
                            >
                              {label}
                            </IonPickerColumnOption>))
                        }
                      </IonPickerColumn>
                    </IonPicker>
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
