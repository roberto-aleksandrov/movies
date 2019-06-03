import React from 'react';
import { Alert, Input } from 'reactstrap';

const FormikInput = ({
    field, 
    form: { touched, errors },
    className,
    ...props
  }) => (
    <div>
      <Input {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <Alert color='light'>{errors[field.name]}</Alert>}
    </div>
);

export default FormikInput;