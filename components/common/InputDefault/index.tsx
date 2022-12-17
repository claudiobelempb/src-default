import React, {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Input.module';

interface InputDefaultType extends InputHTMLAttributes<HTMLInputElement> {}
interface SelectDefaultType extends SelectHTMLAttributes<HTMLSelectElement> {}
interface TextAreaDefaultType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
interface LabelDefaultType extends LabelHTMLAttributes<HTMLLabelElement> {}

type InputDefaultProps = InputDefaultType &
  TypeDefault &
  TextAreaDefaultType &
  SelectDefaultType &
  LabelDefaultType;

export const InputDefault = React.forwardRef(
  ({ ...props }: InputDefaultProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Styles.Container>
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
        <Styles.InputDefaultContainer {...props} ref={ref} />
      </Styles.Container>
    );
  }
);
