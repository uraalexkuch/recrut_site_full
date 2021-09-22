import React from 'react';
import styles from './Category.module.css';
import Subcategory from '../Subcategory/Subcategory';
import {
  EditOutlined,
  BulbOutlined,
  MessageOutlined,
  CommentOutlined,
} from '@ant-design/icons';


const Category = props => {
  console.log(props.data)
  return (
    <table className={styles.CategoryTable}>
      <thead className={styles.Titles}>
        <tr>
          <th className={styles.CategoryName}>
            <EditOutlined /> {props.data.name}
          </th>
          <th className={styles.Topics}>
            <BulbOutlined /> Теми
          </th>
          <th className={styles.Posts}>
            <CommentOutlined /> Повідомлення
          </th>
          <th className={styles.LastPost}>
            <MessageOutlined /> Останнє повідомлення
          </th>
        </tr>
      </thead>
      <tbody className={styles.Body}>
        {props.data.subcategories.map(subcategory => {
          return <Subcategory data={subcategory} key={subcategory._id} />;
        })}
      </tbody>
    </table>
  );
};

export default Category;
