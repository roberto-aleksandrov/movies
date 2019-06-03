import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, Button, CardFooter } from 'reactstrap';

import { cutText } from '../../../../utilities';

import './movie-card.css';

const MovieCard = ({title, description, image, handleDelete, handleUpdate, id }) => (
    <Col className='movie-card' xl={3} md={4} sm={6}>
      <Card className='shadow'>
        <CardImg top width='100%' height='200px'  src={`data:image/jpg;base64, ${image}`} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            Title: {cutText(15, title)}
          </CardTitle>
          <div className='movie-card-body'>
            <div>Description: { cutText(50, description) || 'No description' }</div>
          </div>
        </CardBody>
        <CardFooter>
            <Button color='warning' onClick={() => handleUpdate(id)}>Update</Button>
            <Button color='danger' onClick={() => handleDelete(id)} className='delete-movie-button'>Delete</Button>
        </CardFooter>
      </Card>
    </Col>
);

export default MovieCard;