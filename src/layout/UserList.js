import React from 'react';
import {
    ListGroupItem,
} from 'reactstrap';


import './News.css';


const UserList = props => (
    <ListGroupItem className="list-item" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', display: 'fixed', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div id={`news-${props.id}`}>
            <a 
            href="javascript:void(0);"
            className="list-link"
            onClick={async () => {
              window.location.href = `${process.env.PUBLIC_URL}/#/adminviewprofile/`+props.username;
            }}>
                <h4 style={{ wordWrap: 'break-word' }}>{props.name} </h4>
            </a>
        </div>
    </ListGroupItem>
);

export default UserList;