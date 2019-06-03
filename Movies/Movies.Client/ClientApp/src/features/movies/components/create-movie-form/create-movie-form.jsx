import React from 'react';
import { Label, FormGroup } from 'reactstrap';
import { Field } from 'formik';
import Select from '../../../../components/select';

import UpsertMovieForm from '../upsert-movie-form';

const CreateMovieForm = ({genres, ...rest}) => (
    <UpsertMovieForm {...rest} title='Create Movie'>
        <FormGroup>
            <Label for='genres'>Genres</Label>
            <Field name='genres' component={Select} options={genres} />
        </FormGroup>
    </UpsertMovieForm>
);

export default CreateMovieForm;