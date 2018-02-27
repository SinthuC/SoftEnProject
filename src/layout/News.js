import React from 'react';
import {
    ListGroupItemHeading,
    ListGroupItem,
    ListGroupItemText,
    Button,
} from 'reactstrap';


import './News.css';


const News = props => (
    <ListGroupItem className="list-item" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <Button color="link">
            {props.topic}
        </Button>
    </ListGroupItem>
);

export default News;