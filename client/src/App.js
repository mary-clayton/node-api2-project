import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import PostList from './components/postList';

function App() {
  return (
    <div className="App">
    <Route path ='/' component={PostList} />
    </div>
  );
}

export default App;
