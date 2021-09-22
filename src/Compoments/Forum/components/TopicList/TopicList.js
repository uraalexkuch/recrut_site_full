import React, {useState, useEffect, useContext} from 'react';
import styles from './TopicList.module.css';
import {Skeleton, Pagination, Typography, Modal, Empty} from 'antd';
import {
    BulbOutlined,
    CommentOutlined,
    MessageOutlined,
    CopyFilled,
    FormOutlined,
} from '@ant-design/icons';
import API from '../../utils/API';
import Lastpost from '../Lastpost/Lastpost';
import {Link as RouterLink} from 'react-router-dom';
import {AuthContext} from '../../ForumMain';
import Button from "react-bootstrap/Button";

// antd
const {Link} = Typography;

const TopicList = props => {
    const {contentLoading, setContentLoading, setInfo} = props;
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState({
        currentPage: null,
        totalPages: null,
    });
    const {state} = useContext(AuthContext);
    // Initial load
    console.log(topics)
    useEffect(() => {
       API.get(`/subcategories/topics?sid=${props.sid}`)
            .then(result => {
                setTopics(result.data.topics);
                setInfo({
                    name: result.data.name,
                    description: result.data.description,
                });
                setPages({
                    currentPage: result.data.currentPage,
                    totalPages: result.data.totalPages * 10,
                });
                setContentLoading(false);
                setLoading(false);
            })
            .catch(e => {
                Modal.error({
                    title: 'An error occurred',
                    content: e.message,
                });
            });
    }, [props, props.sid, setContentLoading, setInfo, setTopics]);

    const fetchPage = page => {
        setLoading(true);

        API.get(`/subcategories/topics?sid=${props.sid}&page=${page}`)
            .then(result => {
                setTopics(result.data.topics);
                console.log(result.data.topics)
                setPages({
                    currentPage: result.data.currentPage,
                    totalPages: result.data.totalPages * 10,
                });
                setLoading(false);
            })
            .catch(e => {
                Modal.error({
                    title: 'An error occurred',
                    content: e.message,
                });
            });

    };
    return (
        <table className={styles.TopicList}>
            <thead className={styles.Titles}>
            <tr>
                <th className={styles.Name}>
                    <BulbOutlined/> Назва теми
                </th>
                <th className={styles.Posts}>
                    <CommentOutlined/> Повідомлення
                </th>
                <th className={styles.LastPost}>
                    <MessageOutlined/>Останнє повідомлення
                </th>
            </tr>
            </thead>
            <tbody className={styles.Body}>
            <tr>
                <td colSpan="3">
                    <div className={styles.ActionRow}>
                        {!contentLoading && topics.length > 0 && pages.totalPages > 0 && (
                            <Pagination className="pagination" style={{
                                display: 'contents'
                            }}
                                        defaultCurrent={pages.currentPage}
                                        total={pages.totalPages}
                                        showSizeChanger={false}
                                        onChange={fetchPage}
                            />
                        )}
                        {state.isAuthenticated && (
                            <RouterLink
                                to={`/recruting/forum/newtopic?sid=${props.sid}`}
                                className={styles.NewTopic}
                            >
                                <Button type="btn" style={{
                                    textAlign: "left", width: "auto"
                                }}>
                                    {<FormOutlined/>}&nbsp;&nbsp;
                                    Створити нову тему
                                </Button>
                            </RouterLink>
                        )}
                    </div>
                </td>
            </tr>
            {loading ? (
                <tr>
                    <td colSpan={3}>
                        <Skeleton active/>
                        <Skeleton active/>
                        <Skeleton active/>
                    </td>
                </tr>
            ) : topics.length > 0 ? (
                topics.map(topic => {

                    return (
                        <tr key={topic._id} className={styles.Topic}>
                            <td>
                                <div className={styles.TopicInfo}>
                    <span className={styles.TopicIcon}>
                      <CopyFilled/>
                    </span>
                                    <span className={styles.TopicNameContainer}>
                      <span className={styles.TopicName}>
                        <Link href={`/recruting/forum/topic?sid=${topic.shortid}`}>
                          {topic.title}
                        </Link>
                      </span>
                      <span className={styles.TopicSubtitle}>
                        {topic.subtitle}
                      </span>
                    </span>
                                </div>
                            </td>
                            <td className={styles.TopicPosts}>{topic.posts.length}</td>
                            <Lastpost
                               data={topic.lastpost}
                                className={styles.TopicLastpost}
                            />
                        </tr>
                    );
                })
            ) : (
                <tr>
                    <td colSpan={3}>
                        <Empty
                            description="No topics in this subcategory"
                            className={styles.NoTopics}
                        />
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default TopicList;
