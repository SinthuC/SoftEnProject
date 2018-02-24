import React from 'react';
import {
    Container,
    Row,
    Col,
    ListGroup,
    Button,
} from 'reactstrap';
import SlideShow from '../layout/SlideShow';
import News from '../layout/News';

const styles = {
    section: {
        marginTop: 16,
        marginBottom: 16,
    },
    moreButton: {
        marginTop: 16,
    }
};

const news = [
    {
        id: "news-01",
        title: "News-01",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-02",
        title: "News-02",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-03",
        title: "News-03",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-04",
        title: "News-04",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-05",
        title: "News-05",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-06",
        title: "News-06",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-07",
        title: "News-07",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-08",
        title: "News-08",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-09",
        title: "News-09",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-10",
        title: "News-10",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-11",
        title: "News-11",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-12",
        title: "News-12",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-13",
        title: "News-13",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-14",
        title: "News-14",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-15",
        title: "News-15",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-16",
        title: "News-16",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-17",
        title: "News-17",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-18",
        title: "News-18",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-19",
        title: "News-19",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
    {
        id: "news-20",
        title: "News-20",
        detail: "Nisi aliqua eiusmod et consequat veniam pariatur duis esse."
    },
];

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            newsCount: 10,
        }
        this.getNews = this.getNews.bind(this);
    }

    getNews(prevNews) {
        this.setState({ newsCount: 10 + prevNews });
    }

    render() {
        const { newsCount } = this.state;
        const { getNews } = this;
        return (
            <div>
                <Container style={styles.section}>
                    <Row style={styles.section}>
                        <Col>
                            <SlideShow />
                        </Col>
                    </Row>
                    <Row style={styles.section}>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <ListGroup>
                                { news.slice(0, newsCount).map((item) => (
                                    <News key={item.id} title={item.title} detail={item.detail}/>
                                ))}
                            </ListGroup>
                            <Button 
                                color="primary" 
                                style={styles.moreButton}
                                onClick={() => getNews(newsCount)}>More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    }

}

export default Home;