import React from 'react';
import {
  compose,
  lifecycle,
  withState,
} from 'recompose';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';
import SlideShow from '../layout/SlideShow';
import News from '../layout/News';

import {
  getNewsByLimit,
} from '../redux/action/news';

const items = [
  {
    news_cover: 'example.jpg',
    news_topic: 'Slide 1',
    news_topic: 'Slide 1'
  },
  {
    news_cover: 'example.jpg',
    news_topic: 'Slide 2',
    news_topic: 'Slide 2'
  },
  {
    news_cover: 'example.jpg',
    news_topic: 'Slide 3',
    news_topic: 'Slide 3'
  },
  {
    news_cover: 'example.jpg',
    news_topic: 'Slide 4',
    news_topic: 'Slide 4'
  },
  {
    news_cover: 'example.jpg',
    news_topic: 'Slide 5',
    news_topic: 'Slide 5'
  },
];

const styles = {
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  moreButton: {
    marginTop: 16,
    float: 'right',
  },
};

const enchance = compose(
  connect(
    state => ({
      news: state.news,
    }),
    {
      getNewsByLimit
    },
  ),
  withState('newsCount', 'setNewsCount', 10),
  lifecycle({
    componentDidMount() {
      this.props.getNewsByLimit(0, this.props.newsCount);
    }
  })
);

const Home = props => {
  const { news, newsCount, setNewsCount, getNewsByLimit } = props;
  return (
    <div>
      <Container style={styles.section}>
        <Row style={styles.section}>
          <Col>
            <SlideShow items={news.news == null ? items : news.news } />
          </Col>
        </Row>
        <Row style={styles.section}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <ListGroup>
              {
                news.news != null ? news.news.map((item) => (
                  <News key={item.id} topic={item.news_topic} />
                )) : <ListGroupItem>
                  {
                    news.loading ? "loading" : "Empty."
                  }
                </ListGroupItem>
              }
            </ListGroup>
            {
              news.news != null && news.news.length >= newsCount ? (
                <Button
                  color="success"
                  style={styles.moreButton}
                  onClick={async () => {
                    await getNewsByLimit(0, newsCount+10);
                    await setNewsCount((newsCount + 10));
                  }}
                >
                  {
                    news.loading ? "loading" : "More"
                  }
                </Button>
              ) : false
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default enchance(Home);