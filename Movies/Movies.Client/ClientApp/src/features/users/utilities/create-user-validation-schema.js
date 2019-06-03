import * as Yup from 'yup';

const CreateUserValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    givenName: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    familyName: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
});

export default CreateUserValidationSchema;