import React  from 'react';
import Todos from  './components/Todos' 
import './App.css' ;
function App() {

  const title = 'My list of tasks'

  return (
    
         <div className ="App">
             <Todos title={title} />
        </div>

      
     
  );
}



export default App;
