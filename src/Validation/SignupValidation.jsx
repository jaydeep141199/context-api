import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .max(255, 'Email must be at most 255 characters')
    .matches(
      /^[a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9._-]*@gmail\.com$/,
      'Email must be a valid Gmail address (e.g., example@gmail.com)'
    ),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
    ),

  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain alphabetic characters'),

  date: Yup.date()
    .required('Date is required')
    .max(new Date(), 'Date must be before or equal to today'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

export default validationSchema;
