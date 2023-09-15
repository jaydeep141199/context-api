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
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

export default validationSchema;
