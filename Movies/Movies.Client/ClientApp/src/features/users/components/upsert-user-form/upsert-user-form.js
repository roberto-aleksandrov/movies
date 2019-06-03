import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, FormGroup, Label } from 'reactstrap';
import { Formik, Form, Field } from 'formik';

import Input from '../../../../components/input';

import './upsert-user-form.css';

const UpsertUserForm = ({handleSubmit, validationSchema, title, initialValues, isUpdate}) => (
  <Container className='container h-100'>
    <Row className='h-100'>
        <Col md={7} className='my-auto mx-auto'>
            <Card className='col d-flex justify-content-center shadow upsert-user-card'>
                <CardHeader className='col bg-dark text-center text-white'>{title}</CardHeader>
                <CardBody>
                    <Formik 
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form className='upsert-user-form'>
                            <FormGroup>
                                <Label for='exampleEmail'>Email</Label>
                                <Field type='email' name='email' disabled={isUpdate} component={Input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='givenName'>First Name</Label>
                                <Field type='text' name='givenName' component={Input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='familyName'>Last Name</Label>
                                <Field type='text' name='familyName' component={Input}/>
                            </FormGroup>
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

export default UpsertUserForm;