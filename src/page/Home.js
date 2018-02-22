import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import NavBar from '../layout/NavBar';
import SlideShow from '../layout/SlideShow';
class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container style={{paddingTop:30}}>
                    <SlideShow />
                </Container>
            </div>
        );

    }

}

export default Home;