import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardLink } from 'reactstrap';

import { cutText } from '../../../../utilities';

import './photo-card.css';

const PhotoCard = ({title, tags, authorLink, photoLink, owner, description, imageUrl}) => (
    <Col className='photo-card' xl={3} md={4} sm={6}>
      <Card className='shadow'>
        <CardImg top width='100%' height='200px' src={imageUrl} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <CardLink href={photoLink}>{cutText(15, title)}</CardLink>
            <span> by </span>
            <CardLink href={authorLink}>{cutText(20, owner)}</CardLink>
          </CardTitle>
          <div className='photo-card-body'>
            <div>Description: { cutText(50, description._content) || 'No description' }</div>
            <div className='photo-card-tags'>Tags: { cutText(50, tags) || 'No tags' }</div>
          </div>
        </CardBody>
      </Card>
    </Col>
);

export default PhotoCard;