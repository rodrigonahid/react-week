import React from 'react';
import { TodoList } from './TodoList';
import { BrowserRouter, Route} from "react-router-dom";
import { Home } from './Home';
import { Finances } from './Finances';
import { ImageGallery } from './ImageGallery';

function App() {
  
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/todo-list' component={TodoList} />
      <Route path='/finances' component={Finances} />
      <Route path='/image-gallery' component={ImageGallery} />
    </BrowserRouter>
  );
}

export default App;
