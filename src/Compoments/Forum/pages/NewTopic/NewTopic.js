import React, { useState, useEffect, useContext } from 'react';
import Page from '../../components/Page/Page';
import styles from './NewTopic.module.css';
import { Row, Col, Typography, Form, Input, Modal, Spin } from 'antd';
import {CommentOutlined} from '@ant-design/icons';
import API from '../../utils/API';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../../ForumMain';
import Button from "react-bootstrap/Button";

// antd
const { Title, Text } = Typography;
const { TextArea } = Input;

const NewTopic = props => {
  const [loading, setLoading] = useState(false);
  const [subcategory, setSubcategory] = useState(null);
  const history = useHistory();
  const { state } = useContext(AuthContext);
  const queryParams = props.location.search;
  const shortid = new URLSearchParams(queryParams).get('sid');

  useEffect(() => {
    API.get(`/subcategories/info?sid=${shortid}`).then(result => {
      setSubcategory(result.data);
    });
  }, [shortid]);

  const onFinish = data => {
    setLoading(true);

    const topicData = {
      ...data,
      author: state.user.id,
      subcategory: subcategory._id,
    };

    API.post('/topics/add', topicData, {
      headers: { Authorization: `Bearer ${state.token}` },
    })
      .then(result => {
        console.log(result.data);
        history.push(`/recruting/forum/topic?sid=${result.data.topic.shortid}`);
      })
      .catch(e => {
        setLoading(false);
        Modal.error({
          title: 'Failed to post a new topic',
          content: e.message,
        });
      });
  };

  return (
    <Page>
      <Row className={styles.MainRow}>
        <Col span={24}>
          <div className={styles.NewTopic}>
            <Title level={3}>Нова тема</Title>
            <Text>
             Розміщення в {' '}
              <Link to={`/recruting/forum/subcategory?sid=${shortid}`}>
                {subcategory ? (
                  subcategory.name
                ) : (
                  <Spin size="small" style={{ marginLeft: '5px' }} />
                )}
              </Link>
            </Text>
            <Form
              name="login"
              onFinish={onFinish}
              style={{ marginTop: '40px'
             }}
            >
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'The title must be at least 5 characters long',
                    min: 5,
                  },
                ]}
              >
                <Input style={{
                  marginBottom:"1rem", width:"50%"}} placeholder="Заголовок" disabled={loading} />
              </Form.Item>
              <Form.Item name="subtitle">
                <Input style={{
                  marginBottom:"1rem", width:"70%"}} placeholder="Підзаголовок/за потребою" disabled={loading} />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message:
                      'The message of the topic must be at least 5 characters long',
                    min: 5,
                  },
                ]}
              >
                <TextArea style={{
                  width:'100%'}} placeholder="Зміст" rows={8} disabled={loading} />
              </Form.Item>

              <Form.Item>
                <Button type="btn" style={{
                  textAlign: "left", width: "auto"
                }}
                  htmlType="submit"
                  disabled={loading}
                >{<CommentOutlined />}&nbsp;
                 Створити нову тему
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Page>
  );
};

export default NewTopic;
