import React, { useEffect, useState } from 'react';
import styles from './Activity.module.css';
import { Typography, Skeleton } from 'antd';
import Page from '../../components/Page/Page';
import API from '../../utils/API';
import convertDate from '../../utils/convertDate';
import WidgetBar from '../../components/WidgetBar/WidgetBar';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import {Col,Row} from "react-bootstrap"
import {
  MessageOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons';

// antd
const { Title } = Typography;

const Activity = props => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/stats/activity').then(result => {
      setActivities(result.data.activities);
      setLoading(false);
    });
  }, []);

  const activitiesMapper = activity => {
    console.log(activity)
    switch (activity.type) {
      case 'user':
        return (
          <div className={styles.ActivityDiv} key={activity._id}>
            <div className={styles.Info}>
              <span>
                <UserAddOutlined className={styles.Icon} />
              Привітаємо нового користувача,{' '}
                <Link to="/recruting/forum/">{activity.surname}</Link>
              </span>
              <time timestamp={activity.createdAt} className={styles.Date}>
                <ClockCircleOutlined className={styles.Icon} />
                {convertDate(activity.createdAt)}
              </time>
            </div>
          </div>
        );
      case 'topic':
        return (
          <div className={styles.ActivityDiv} key={activity._id}>
            <div className={styles.Info}>
              <span>
                <CommentOutlined className={styles.Icon} />
                <Link to="/recruting/forum/">{activity.author.surname}</Link> Створив(-ла) нову тему:{' '}
                <Link to={`/recruting/forum/topic?sid=${activity.shortid}`}>
                  {activity.title}
                </Link>{' '}
                in{' '}
                <Link to={`/recruting/forum/subcategory?sid=${activity.subcategory.shortid}`}>
                  {activity.subcategory.name}
                </Link>
              </span>
              <time timestamp={activity.createdAt} className={styles.Date}>
                <ClockCircleOutlined className={styles.Icon} />
                {convertDate(activity.createdAt)}
              </time>
            </div>
          </div>
        );
      case 'post':
        return (
          <div className={styles.ActivityDiv} key={activity._id}>
            <div className={[styles.Info, styles.PostInfo].join(' ')}>
              <span>
                <MessageOutlined className={styles.Icon} />
                <Link to="/recruting/forum/">{activity.author.surname}</Link> Відповівів(-ла) в темі
                {' '}
                <Link to={`/recruting/forum/topic?sid=${activity.topic.shortid}`}>
                  {activity.topic.title}
                </Link>
              </span>
              <time timestamp={activity.createdAt} className={styles.Date}>
                <ClockCircleOutlined className={styles.Icon} />
                {convertDate(activity.createdAt)}
              </time>
            </div>
            <Post data={activity} minimal notimestamp />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Page>
      <Row>
        <Title style={{ margin: '2rem 0', color: 'white',fontSize:'2rem' }}>
         Недавня активність
        </Title>
      </Row>
      <Row>
        <Col className="col-9">
          <div className={styles.Activity}>
            {loading ? (
              <>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
              </>
            ) : (
              activities.map(activitiesMapper)
            )}
          </div>
        </Col>
        <Col className="col-3">
          <WidgetBar />
        </Col>
      </Row>
    </Page>
  );
};

export default Activity;
