import React, { useState, useEffect, useContext } from 'react';
import styles from './AddPostForm.module.css';
import { Typography, Input } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { AuthContext } from '../../ForumMain';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

// antd
const { TextArea } = Input;
const { Title } = Typography;

const AddPostForm = props => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (loading) {
      setDisabledButton(true);
    } else if (message.length < 3) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [loading, message]);

  if (state.isAuthenticated) {
    return (
      <div className={styles.AddPost}>
        <div className={styles.AddPostArea}>
          <Title level={4}>Додати повідомлення</Title>
          <TextArea
            rows={6}
            className={styles.AddPostInput}
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            disabled={loading}
          />
          <Button  type="btn" style={{
            textAlign: "left", width: "auto"
          }}                   onClick={() => {
              props.postReply(message, setMessage, loading, setLoading);
            }}
            disabled={disabledButton}
          >{<MessageOutlined />}&nbsp;
            Опублікувати
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.AddPost}>
      <div className={styles.AuthMessage}>
        Потрібно залогінитися перед публікацією
        <br />
        <Link to="/recruting/forum/login">Login</Link> | <Link to="/recruting/forum/register">Register</Link>
      </div>
    </div>
  );
};

export default AddPostForm;
