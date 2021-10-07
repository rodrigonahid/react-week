import React from 'react';
import { TodoList } from './TodoList';
import { BrowserRouter, Route} from "react-router-dom";
import { Home } from './Home';
import { Finances } from './Finances';

function App() {
  
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/todo-list' component={TodoList} />
      <Route path='/finances' component={Finances} />
    </BrowserRouter>
  );
}

export default App;
