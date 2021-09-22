import React, { createContext, useReducer, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header/Header';

import reducer from './utils/reducer';

// Pages
import Board from './pages/Board/Board';
import Subcategory from './pages/Subcategory/Subcategory';
import Topic from './pages/Topic/Topic';
import Activity from './pages/Activity/Activity';
import NewTopic from './pages/NewTopic/NewTopic';
import Page404 from './pages/Page404/Page404';
import ProfileStat from "./profile/ProfileStat";


// Auth context
export const AuthContext = createContext();
const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const ForumMain = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Check if there's a token on localStorage and authenticate with it
        if (localStorage.getItem('userInfo')) {
            const user = JSON.parse(localStorage.getItem('userInfo'));
            const token = user.accessToken;
            console.log(token)
            console.log(user)
            dispatch({
                type: 'LOGIN',
                payload: {
                    user,
                    token,
                },
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <div >
                    <Layout>
                        <Header />
                        <Switch>
                            <Route path="/recruting/forum" exact component={Board} />
                            <Route path="/recruting/forum/subcategory" component={Subcategory} />
                            <Route path="/recruting/forum/topic" component={Topic} />
                            <Route path="/recruting/forum/activity" component={Activity} />
                            <Route path="/recruting/forum/newtopic" component={NewTopic} />
                            <Route path="/recruting/forum/profile" component={ ProfileStat} />
                            <Route path="*" exact component={Page404} />
                        </Switch>


                    </Layout>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default ForumMain;
