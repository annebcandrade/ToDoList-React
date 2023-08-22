import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js';


function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }


  return (
    <Container>
      <ToDoList>
        <Input className='input-value' onChange={inputMudou} placeholder="O que tenho para fazer..."></Input>
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isfinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista.</h3>
            )}
         
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App