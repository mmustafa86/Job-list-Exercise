import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Jobs from './component/jobs'


function App() {
  return (
    <BrowserRouter>
   <Jobs/>
   </BrowserRouter>
  );
}

export default App;