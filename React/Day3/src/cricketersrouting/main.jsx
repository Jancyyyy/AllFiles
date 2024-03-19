import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import AllCricketers from './allCricketers';
import Cricketers from './cricketers';
import Home from './home';
import PageNotFound from './pagenotfound';
import Player from './player';
import Schedule from './schedule';

const Main = () => (
    <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cricketer' element={<Cricketers />}>
            <Route path='/cricketer/allCricketers' element={<AllCricketers />} />
            <Route path='/cricketer/:id' element={<Player />} />
        </Route>
        <Route path='/schedule' element={<Schedule />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
)

export default Main;