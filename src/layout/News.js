import React from 'react';
import {
    ListGroupItemHeading,
    ListGroupItem,
    ListGroupItemText,
    Button,
} from 'reactstrap';


import './News.css';


const News = props => (
    <ListGroupItem className="list-item" style={{ backgroundColor: 'white', display: 'fixed', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div>
            <a href="#">
                <h4 style={{ wordWrap: 'break-word' }}>{props.topic}</h4>
            </a>
        </div>
    </ListGroupItem>
);

export default News;