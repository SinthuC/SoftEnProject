import React from 'react';
import { 
    ListGroupItemHeading, 
    ListGroupItem,
    ListGroupItemText,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import './News.css';


const News = props => (
        <ListGroupItem className="list-item">
            <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
            <ListGroupItemText>{props.detail}</ListGroupItemText>
        </ListGroupItem>
);

News.propTypes = {
    title: PropTypes.string,
    detail: PropTypes.string
} 

export default News;