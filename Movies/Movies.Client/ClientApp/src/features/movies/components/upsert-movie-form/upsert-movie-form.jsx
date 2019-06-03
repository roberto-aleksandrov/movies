import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, FormGroup, Label, Input as ReacstrapInput } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

import Input from '../../../../components/input';
import DatePicker from '../../../../components/date-picker';

import './upsert-movie-form.css';
  
const FileInput = ({field, form}) => (
    <ReacstrapInput 
        type='file'
        onChange={e =>  form.setFieldValue(field.name, e.target.files[0])}
    />
);

const UpsertMovieForm = ({handleSubmit, validationSchema, title, initialValues, children}) => (
  <Container className='container h-100'>
    <Row className='h-100'>
        <Col md={7} className='my-auto mx-auto'>
            <Card className='col d-flex justify-content-center shadow upsert-movie-card'>
                <CardHeader className='col bg-dark text-center text-white'>{title}</CardHeader>
                <CardBody>
                    <Formik 
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className='upsert-movie-form'>
                            <FormGroup>
                                <Label for='title'>Title</Label>
                                <Field type='text' name='title' component={Input}/>
                            </FormGroup> 
                            <FormGroup>
                                <Label for='releaseDate'>Release Date</Label>
                                <Field
                                    type="date"
                                    name='releaseDate'
                                    component={props => <DatePicker {...props} customInput={<ReacstrapInput/>}/>}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='description'>Description</Label>
                                <Field type='textarea' name='description' component={Input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='image'>Image</Label>
                                <Field 
                                    name='image' 
                                    className='form-control movie-image-input'
                                    component={FileInput}
                                />
                            </FormGroup>
                            {children}
                            <div className='col text-center'>
                                <Button outline type='submit'>Submit</Button>
                            </div>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>
        </Col>
    </Row>
 </Container>
);

export default UpsertMovieForm;