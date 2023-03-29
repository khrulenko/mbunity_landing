import { ChangeEvent, useState } from 'react';
import {
  styled,
  Stack,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@mui/material';
import {
  createFormWrapperStyles,
  createFieldsWrapperStyles,
  createSelectWrapperStyles,
  createRadioHeaderStyles,
  createRadioGroupWrapperStyles,
  createPlaneImageStyles,
} from './styles';
import { AnyFunction } from '../../../common/types';
import RadioController from '../../components/RadioController';
import image from './letter_send.png';

const FormWrapper = styled(Stack)(createFormWrapperStyles);
const FieldsWrapper = styled(Stack)(createFieldsWrapperStyles);
const SelectWrapper = styled(Stack)(createSelectWrapperStyles);
const RadioHeader = styled(Typography)(createRadioHeaderStyles);
const RadioGroupWrapper = styled(RadioGroup)(createRadioGroupWrapperStyles);
const PlaneImage = styled('img')(createPlaneImageStyles);

const REGEXP_TEXT = /^[a-z]{0,30}$/i;
const REGEXP_PHONE = /^\+?[0-9]{0,12}$/;

const processOnChange =
  (action: AnyFunction, regexp: RegExp = /.*/) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const newValue = value.match(regexp);

    if (newValue) action(newValue[0]);
  };

const controlElement = (
  <Radio
    icon={<RadioController />}
    checkedIcon={<RadioController checked={true} />}
  />
);

const ContactForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('gen_inc_1');

  const onFirstNameChange = processOnChange(setFirstName, REGEXP_TEXT);
  const onLastNameChange = processOnChange(setLastName, REGEXP_TEXT);
  const onEmailChange = processOnChange(setEmail);
  const onPhoneChange = processOnChange(setPhone, REGEXP_PHONE);
  const onMessageChange = processOnChange(setMessage);
  const onSubjectChange = processOnChange(setSubject);

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
      subject,
    };

    console.log('Here is a message and user data:', data);
  };

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

      <SelectWrapper>
        <RadioHeader>Select Subject?</RadioHeader>

        <RadioGroupWrapper value={subject} onChange={onSubjectChange}>
          <FormControlLabel
            value="gen_inc_1"
            label="General Inquiry"
            control={controlElement}
          />

          <FormControlLabel
            value="gen_inc_2"
            label="General Inquiry"
            control={controlElement}
          />

          <FormControlLabel
            value="gen_inc_3"
            label="General Inquiry"
            control={controlElement}
          />

          <FormControlLabel
            value="gen_inc_4"
            label="General Inquiry"
            control={controlElement}
          />
        </RadioGroupWrapper>
      </SelectWrapper>

      <TextField
        value={message}
        onChange={onMessageChange}
        multiline
        label="Message"
        placeholder="Write your message.."
      />

      <Button onClick={onSubmit}>
        <span>Send Message</span>

        <PlaneImage src={image} alt="letter_send" />
      </Button>
    </FormWrapper>
  );
};

export default ContactForm;
