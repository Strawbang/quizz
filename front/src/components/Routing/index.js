import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Manage from '../../pages/Question';
import Home from '../../pages/Home';
import Quizz from '../../pages/Quizz';
import Question from '../../pages/Question'
import Participe from '../../pages/Participe';

const Routing = () => {
    return(
      <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/quizz' element={<Quizz/>} ></Route>
          <Route path='/question' element={<Question/>}></Route>
          <Route path='/participe' element={<Participe/>}></Route>
      </Routes>  
    )
}

export default Routing;