import React from 'react';
import { TodoList } from './TodoList';
import { BrowserRouter, Route} from "react-router-dom";
import { Home } from './Home';

function App() {
  
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/todo-list' component={TodoList} />
    </BrowserRouter>
  );
}

export default App;
