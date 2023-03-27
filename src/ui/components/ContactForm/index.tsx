import { ChangeEvent, useState } from 'react';
import {
  styled,
  Stack,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { createFormWrapperStyles, createFieldsWrapperStyles } from './styles';
import { AnyFunction } from '../../../common/types';

const FormWrapper = styled(Stack)(createFormWrapperStyles);
const FieldsWrapper = styled(Stack)(createFieldsWrapperStyles);

const REGEXP_TEXT = /^[a-z]{0,30}$/;
const REGEXP_PHONE = /^\+?[0-9]{0,12}$/;

const processOnChange =
  (action: AnyFunction, regexp: RegExp = /.*/) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const newValue = value.match(regexp);

    if (newValue) action(newValue[0]);
  };

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onFirstNameChange = processOnChange(setFirstName, REGEXP_TEXT);
  const onLastNameChange = processOnChange(setLastName, REGEXP_TEXT);
  const onEmailChange = processOnChange(setEmail);
  const onPhoneChange = processOnChange(setPhone, REGEXP_PHONE);
  const onMessageChange = processOnChange(setMessage);

  return (
    <FormWrapper>
      <FieldsWrapper>
        <TextField
          value={firstName}
          onChange={onFirstNameChange}
          label="First Name"
          type="text"
        />

        <TextField
          value={lastName}
          onChange={onLastNameChange}
          label="Last Name"
          type="text"
        />
      </FieldsWrapper>

      <FieldsWrapper>
        <TextField
          value={email}
          onChange={onEmailChange}
          label="Email"
          type="email"
        />

        <TextField
          value={phone}
          onChange={onPhoneChange}
          label="Phone Number"
          type="tel"
        />
      </FieldsWrapper>

      <Stack>
        <Typography fontWeight="bold">Select Subject?</Typography>

        <RadioGroup row>
          <FormControlLabel
            value="gen_inc_1"
            control={<Radio />}
            label="General Inquiry"
          />
          <FormControlLabel
            value="gen_inc_2"
            control={<Radio />}
            label="General Inquiry"
          />
          <FormControlLabel
            value="gen_inc_3"
            control={<Radio />}
            label="General Inquiry"
          />
          <FormControlLabel
            value="gen_inc_4"
            control={<Radio />}
            label="General Inquiry"
          />
        </RadioGroup>
      </Stack>

      <TextField
        value={message}
        onChange={onMessageChange}
        multiline
        label="Message"
        placeholder="Write your message.."
      />
    </FormWrapper>
  );
};

export default ContactForm;
