import React from 'react';
import { 
    ListGroupItemHeading, 
    ListGroupItem,
    ListGroupItemText,
} from 'reactstrap';

import { PropTypes } from 'prop-types';
import './News.css';


const News = props => (
        <ListGroupItem className="list-item" style={{backgroundColor: 'rgba(144, 149, 93, 0.3)',color:'#283227'}}>
            <ListGroupItemHeading>{props.title}</ListGroupItemHeading>
        </ListGroupItem>
);

News.propTypes = {
    title: PropTypes.string,    
   
} 

export default News;