import { useForm } from 'react-hook-form';
import { AppFormInput } from '../common/AppForm/components/AppFormInput';
import { getTextRules } from '../common/AppForm/components/helpers/getTextRules';
import { useTimeOffRequests } from '../../contexts/TimeOffRequestsContext/TimeOffRequestsContext';
import { AppColumn } from '../common/AppView/AppColumn';
import { IonButton, IonModal, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { AppForm } from '../common/AppForm/AppForm';
import { useRef } from 'react';
import { TimeOffRequestsActionCode } from '../../contexts/TimeOffRequestsContext/types';
import { TimeOffRequest, TimeOffRequestStatus } from '../../types/models';

const MODAL_TRIGGER_ID = 'SUPERVISOR_NOTE_MODAL';
const REJECT_BUTTON_LABEL = 'REJECT REQUEST';

enum SupervisorNoteForm {
    note = 'note',
}

type SupervisorNoteFieldValues = {
    [SupervisorNoteForm.note]: string;
};

type SupervisorDetailPageFormProps = Pick<TimeOffRequest, 'id'>

export const SupervisorRequestDetailButtons = ({ id }: SupervisorDetailPageFormProps) => {
  const router = useIonRouter();

  const modal = useRef<HTMLIonModalElement>(null);

  const { dispatch } = useTimeOffRequests();

  const {
    control,
    handleSubmit,
  } = useForm<SupervisorNoteFieldValues>({
    mode: 'onChange',
    defaultValues: { note: '' },
  });

  const updateRequestStatus = (
    status: TimeOffRequestStatus.approved | TimeOffRequestStatus.rejected,
    supervisorNote?: string,
  ) => {
    dispatch({
      type: TimeOffRequestsActionCode.updateRequestStatus,
      payload: {
        id,
        status,
        supervisorNote,
      },
    });
    router.goBack();
  };

  const onSubmit = (data: SupervisorNoteFieldValues) => {
    modal.current?.dismiss(undefined, 'confirm');
    updateRequestStatus(TimeOffRequestStatus.rejected, data.note);
  };

  return (
    <AppColumn pt={'l'} px={'m'}>
      <IonButton
        type={'submit'}
        expand={'block'}
        onClick={() => updateRequestStatus(TimeOffRequestStatus.approved)}
      >
        APPROVE REQUEST
      </IonButton>
      <IonButton
        id={MODAL_TRIGGER_ID}
        color={'danger'}
        type={'submit'}
        expand={'block'}
      >
        {REJECT_BUTTON_LABEL}
      </IonButton>
      <IonModal
        ref={modal}
        trigger={MODAL_TRIGGER_ID}
        isOpen={false}
      >
        <IonToolbar>
          <IonTitle>
            <h3>Supervisor note</h3>
          </IonTitle>
        </IonToolbar>
        <AppColumn gap={'m'} py={'l'}>
          <AppForm
            control={control}
            submitButtonLabel={REJECT_BUTTON_LABEL}
            onSubmit={handleSubmit(onSubmit)}
            submitButtonColor={'danger'}
          >
            <AppFormInput
              name={SupervisorNoteForm.note}
              control={control}
              placeholder={'Enter your note'}
              rules={getTextRules({ minLength: 10 })}
            />
          </AppForm>
        </AppColumn>
      </IonModal>
    </AppColumn>
  );
};