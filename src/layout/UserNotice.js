import React from 'react';
import {
    ListGroupItem,
} from 'reactstrap';


import './News.css';


const UserNotice = props => (
    <ListGroupItem className="list-item" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', display: 'fixed', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div id={`news-${props.id}`}>
            <a 
            href="#/manageuser" 
            className="list-link"
            >
            
                <h4 style={{ wordWrap: 'break-word' }}>{props.name} ได้สมัครสมาชิก</h4>
            </a>
        </div>
    </ListGroupItem>
);

export default UserNotice;