import React from 'react';
import { Container, Header } from './App.styles';
import { AddTask } from './components/AddTask';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';



function App() {
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Bom dia', done: false },
    { id: 2, name: 'Boa trde', done: false },
  ]);

  return (
    <div className="App">
      <Container>
        <Header>
          <h1>To-do list</h1>
        </Header>
        <AddTask />
        <div>
          {list.map((item)=>{
            return <ListItem key={item.id} item={item} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
