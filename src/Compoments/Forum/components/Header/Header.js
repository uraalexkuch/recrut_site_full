import React from 'react';
import {
  ProfileOutlined,
  FireOutlined,
} from '@ant-design/icons';
import {Col,Row} from "react-bootstrap"
import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";


const Header = () => {

  const location = useLocation();
  let boardsKey = '/recruting/forum/';

  if (location.pathname === '/recruting/forum/subcategory' || location.pathname === '/recruting/forum/topic') {
    boardsKey = location.pathname;
  }



  return (
    <Navbar className="header"
      style={{
        backgroundColor: '#FFD947',
        padding: '0 100px',
        height: 'auto',
      }}
    >
      <Row>
        <Col className="col-auto" style={{
          marginLeft:"50%",marginRight:"25%"
        }}>
          <Navbar
            className={styles.HeaderMenu}
          >
              <NavLink className="forum" style={{
                marginLeft:"5rem" }}
                       to="/recruting/forum/">{<ProfileOutlined />}&nbsp;&nbsp;Головна</NavLink>
              <NavLink className="forum" style={{
                marginLeft:"5rem" }}
                       to="/recruting/forum/activity">{<FireOutlined />}&nbsp;&nbsp;Недавня активність</NavLink>
              <NavLink className="forum" style={{
                  marginLeft:"5rem" }}
                       to="/recruting/forum/profile">{<FireOutlined />}&nbsp;&nbsp;Мій профіль</NavLink>
          </Navbar>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Header;
