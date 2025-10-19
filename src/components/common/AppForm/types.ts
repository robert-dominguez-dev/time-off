import { ControllerProps, FieldValues } from 'react-hook-form';

export type Rules<TFieldValues extends FieldValues = FieldValues> =
    ControllerProps<TFieldValues>['rules'];
