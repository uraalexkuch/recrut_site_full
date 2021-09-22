import React, { useState } from 'react';
import Page from '../../components/Page/Page';
import {  Typography, Skeleton} from 'antd';
import styles from './Subcategory.module.css';
import TopicList from '../../components/TopicList/TopicList';
import WidgetBar from '../../components/WidgetBar/WidgetBar';
import {Col,Row} from "react-bootstrap"
// antd
const { Title } = Typography;

const Subcategory = props => {
  const [contentLoading, setContentLoading] = useState(true);
  const [info, setInfo] = useState({ surname: '', description: '' });
  const queryParams = props.location.search;
  const shortid = new URLSearchParams(queryParams).get('sid');

  return (
    <Page>
      <Row>
        <Title
          title={info.description}
          style={{ color: 'white', margin: '60px 0' }}
        >
          {info.name}
        </Title>
      </Row>
      <Row>
        <Col className="col-9">
          <div
            className={styles.SkeletonContainer}
            style={{ display: contentLoading ? 'block' : 'none' }}
          >
            <Skeleton active />
            <Skeleton className={styles.Skeleton} active />
            <Skeleton className={styles.Skeleton} active />
          </div>
          <div
            className={styles.TopicListContainer}
            style={{ display: contentLoading ? 'none' : 'block' }}
          >
            <TopicList
              sid={shortid}
              contentLoading={contentLoading}
              setContentLoading={setContentLoading}
              setInfo={setInfo}
            />
          </div>
        </Col>
        <Col className="col-3">
          <WidgetBar />
        </Col>
      </Row>
    </Page>
  );
};

export default Subcategory;
