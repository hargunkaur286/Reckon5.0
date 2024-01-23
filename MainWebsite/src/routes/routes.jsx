import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Lander from '../pages/Lander';
import Notes from '../pages/Notes';
import Time from '../pages/TimeManagement';

function routes() {
    return (
       
       <Routes>
        <Route path='/' element={<Lander />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/Time' element={<Time />} />
       </Routes>
       )
    }
    
    export default routes;