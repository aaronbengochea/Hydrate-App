import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Header, Footer, Log, Settings, Leaderboard, Register,StateTutorial, ReducerTutorial, EffectTutorial} from './components';
import './index.css';

function App() {
  return (

    
        

      <Router>
        <div className="App">
          <Header/>
            <div>
            <ul className='content'>

            <Routes>
              <Route exact path='/' element={<Register/>}></Route>
              <Route path='/leaderboard' element={<Leaderboard/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/log' element={<Log/>}></Route>
              <Route path='/settings' element={<Settings/>}></Route>
              <Route path='/state' element={<StateTutorial/>}></Route>
              <Route path='/reducer' element={<ReducerTutorial/>}></Route>
              <Route path='/effect' element={<EffectTutorial/>}></Route>
            </Routes>

            </ul>
            </div>
          <Footer/>
        </div>
      </Router>
    
  );
}

export default App;
