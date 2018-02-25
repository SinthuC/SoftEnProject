import React from 'react';
import { 
    ListGroupItemHeading, 
    ListGroupItem,
    ListGroupItemText,
} from 'reactstrap';

import { PropTypes } from 'prop-types';
import './News.css';


const News = props => (
        <ListGroupItem className="list-item" style={{backgroundColor: 'white'}}>
            <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
        </ListGroupItem>
);

News.propTypes = {
    title: PropTypes.string,    
   
} 

export default News;