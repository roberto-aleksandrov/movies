import React from 'react';
import { InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

const SearchBar = ({ handleSubmit, placeHolder, searchButtonText }) => (
    <Formik initialValues={{searchText: '' }} onSubmit={handleSubmit}>
        <Form>    
            <InputGroup>
                <Field type='text' name='searchText' className='form-control' placeholder={placeHolder}/>
                <InputGroupAddon addonType='prepend'>
                    <Button type='submit'>{searchButtonText}</Button>
                </InputGroupAddon>
            </InputGroup>   
        </Form>
    </Formik>
);

export default SearchBar;