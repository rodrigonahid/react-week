import React from 'react';
import { Container, Header } from './App.styles';
import { AddTask } from './components/AddTask';
import { HomeLink } from './components/HomeLink';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';


export function TodoList(){
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Fazer cafe', done: false },
    { id: 2, name: 'Fazer o commit', done: false },
  ]);

  function handleAddTask(taskName: string){
    let newList = [...list];
    newList.push({
      id: list.length++,
      name: taskName,
      done: false
    })
    setList(newList);
  }
  
  return(
    <div className="App">
      <Container>
        <Header>
          <HomeLink />
          <h1>To-do list</h1>
        </Header>
        <AddTask onEnter={handleAddTask} />
        <div>
          {list.map((item)=>{
            return <ListItem key={item.id} item={item} />;
          })}
        </div>
      </Container>
    </div>
  )
}