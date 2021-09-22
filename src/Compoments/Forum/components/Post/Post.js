import React from 'react';
import styles from './Post.module.css';
import NoAvatar from '../../../../Img/logo.png';
import { Typography } from 'antd';
import convertDate from '../../utils/convertDate';

// antd
const { Link } = Typography;

const Post = props => {
  const dateContent = props.data.updatedAt;
  const date = new Date(dateContent);
  const finalDate = convertDate(dateContent);
console.log(props.data)
  return (
    <div
      className={
        props.minimal ? [styles.Post, styles.Minimal].join(' ') : styles.Post
      }
    >
      <div
        className={
          props.minimal
            ? [styles.User, styles.MinimalUser].join(' ')
            : styles.User
        }
      >
        <div className={styles.Surname}>
          <Link href="/recruting/forum">{props.data.author.name}&nbsp;{props.data.author.surname}</Link>
        </div>

        <div
          className={
            props.minimal
              ? [styles.Avatar, styles.MinimalAvatar].join(' ')
              : styles.Avatar
          }
        >
          <img  src={props.data.author.avatar} alt="avatar" />
        </div>
        {!props.minimal && (
          <div className={styles.Stats}>
            <span>
              <b>Теми:</b> {props.data.author.topicCount}
            </span>
            <span>
              <b>Повідомлення:</b> {props.data.author.postCount}
            </span>
            <span>
              <b>Дата створення:</b> <br />
              {convertDate(props.data.author.registerDate)}
            </span>
          </div>
        )}
      </div>
      <div className={styles.Message}>
        <div className={styles.MessageContent}>{props.data.message}</div>
        {!props.notimestamp && (
          <time timestamp={date.toString()} className={styles.Date}>
            {finalDate}
          </time>
        )}
      </div>
      <div id={props.data.shortid} />
    </div>
  );
};

export default Post;
