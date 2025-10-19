import { AppPageLayout } from '../components/common/AppPageLayout';
import { useUser } from '../contexts/UserContext';
import { useForm } from 'react-hook-form';
import { AppFormInput } from '../components/common/AppForm/components/AppFormInput';
import { getTextRules } from '../components/common/AppForm/components/helpers/getTextRules';
import { AppForm } from '../components/common/AppForm/AppForm';
import { IonItem, IonText } from '@ionic/react';
import { aliceEmployee, bobSupervisor, karelEmployee } from '../contexts/constants';
import { AppColumn } from '../components/common/AppView/AppColumn';
import { FillAsUserLink } from '../components/login/FillAsUserLink';

const CORRECT_PASSWORD_MOCK = '1111';

enum LoginFormFieldName {
    username = 'username',
    password = 'password',
}

type LoginFormValues = {
    [LoginFormFieldName.username]: string;
    [LoginFormFieldName.password]: string;
};

export const LoginPage = () => {
  const { login } = useUser();

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    trigger,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  /**
     * Simplified logic for task purposes...
     */
  const onSubmit = (data: LoginFormValues) => {
    if (data.password === CORRECT_PASSWORD_MOCK) {
      login(data.username);
    } else {
      setError(LoginFormFieldName.username, { message: 'Invalid credentials' });
    }
  };

  const updateUserToForm = (username: string) => {
    setValue(LoginFormFieldName.username, username);
    setValue(LoginFormFieldName.password, CORRECT_PASSWORD_MOCK);
    trigger();
  };

  return (
    <AppPageLayout title={'Login'} gap={'l'}>
      <AppForm control={control} onSubmit={handleSubmit(onSubmit)} submitButtonLabel={'LOGIN'}>
        <AppFormInput
          name={LoginFormFieldName.username}
          control={control}
          label={'Username'}
          placeholder={'Enter your username'}
          rules={getTextRules({ minLength: 3 })}
        />
        <AppFormInput
          name={LoginFormFieldName.password}
          control={control}
          label={'Password'}
          placeholder={'Enter your password'}
          type={'password'}
          rules={getTextRules({ minLength: 4 })}
        />
      </AppForm>
      <IonItem lines={'none'}>
        <AppColumn grow gap={'s'}>
          <IonText>Click on some link below to fill test credentials:</IonText>
          <FillAsUserLink user={aliceEmployee} updateUserToForm={updateUserToForm} />
          <FillAsUserLink user={karelEmployee} updateUserToForm={updateUserToForm} />
          <FillAsUserLink user={bobSupervisor} updateUserToForm={updateUserToForm} />
        </AppColumn>
      </IonItem>
    </AppPageLayout>
  );
};
