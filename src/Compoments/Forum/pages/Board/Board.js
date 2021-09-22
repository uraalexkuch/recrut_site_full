import React, { useEffect, useState } from 'react';
import { Typography,  Skeleton, Modal} from 'antd';
import API from '../../utils/API';
import Page from '../../components/Page/Page';
import styles from './Board.module.css';
import Category from '../../components/Category/Category';
import WidgetBar from '../../components/WidgetBar/WidgetBar';
import {Col,Row} from "react-bootstrap"


// antd
const { Title } = Typography;

const Forum = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    API.get('/categories')
      .then(result => {
        setLoadingCategories(false);
        setCategories(result.data.categories);
        return API.get('/stats');
      })
      .catch(e => {
        Modal.error({
          title: 'An error occurred',
          content: e.message,
        });
      });
  }, []);
console.log(categories)
  return (
    <Page>
      <Row>
        <Title style={{ margin: '2rem 0', color: 'white',fontSize:'2rem' }}>Головна</Title>
      </Row>

      <Row>

        <Col className="col-9">
          {loadingCategories ? (
            <div className={styles.LoadingCategories}>
              <Skeleton active />
              <Skeleton className={styles.Skeleton} active />
              <Skeleton className={styles.Skeleton} active />
            </div>
          ) : (
            categories.map(category => {
              return <Category data={category} key={category._id} />;
            })
          )}
        </Col>
        <Col className="col-3">
          <WidgetBar />
        </Col>
      </Row>
    </Page>
  );
};

export default Forum;
