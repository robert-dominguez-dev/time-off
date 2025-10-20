import { IonList } from '@ionic/react';
import { getAppViewStyle } from '../AppView/hooks/getAppViewStyle';
import { Control, FieldValues } from 'react-hook-form';
import { ChildrenProp } from '../../../types/common';
import { AppFormSubmitButton } from './components/AppFormSubmitButton';
import { AppColumn } from '../AppView/AppColumn';
import { Color } from '@ionic/core';

const ionListStyles = getAppViewStyle({
  flexDirection: 'column',
  gap: 'm',
});

type AppFormProps<TFieldValues extends FieldValues> = ChildrenProp & {
    control: Control<TFieldValues>
    submitButtonLabel: string,
    submitButtonColor?: Color,
    onSubmit: () => void;
}

export const AppForm = <TFieldValues extends FieldValues>({
  children,
  control,
  submitButtonLabel,
  submitButtonColor,
  onSubmit,
}: AppFormProps<TFieldValues>) =>
    (
      <form onSubmit={onSubmit}>
        <IonList style={ionListStyles}>
          {children}
        </IonList>
        <AppColumn px={'m'} pt={'l'}>
          <AppFormSubmitButton control={control} label={submitButtonLabel} color={submitButtonColor} />
        </AppColumn>
      </form>
    );
