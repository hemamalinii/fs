import React, {useState} from 'react';
import './App.css';

function App(){
  const [votes, setvotes]=useState({option1:0, option2:0, option3:0});
  const handlevote = (option) => {
    setvotes((prevvotes)=>({...prevvotes, [option]:prevvotes[option]+1,})); };

    return (
      <div className="App">
        <h1>Voting Application</h1>
        <div className='options'>
          <div>
            OPTION 1:
            <button onClick={()=>handlevote('option1')}>BJP</button>
            <span>{votes.option1}</span>
          </div>
          <div>
            OPTION 2:
            <button onClick={()=>handlevote('option2')}>INC</button>
            <span>{votes.option2}</span>
          </div>
          <div>
            OPTION 3:
            <button onClick={()=>handlevote('option3')}>JDS</button>
            <span>{votes.option3}</span>
          </div>
        </div>
      </div>
    );

  }
  export default App;