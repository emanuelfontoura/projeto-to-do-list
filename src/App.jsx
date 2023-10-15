import React from 'react';
import List from './List';

function App() {
  const styleDivContainer = {
    display: 'flex',
    alignItems: 'flex-end',
    gap:'15px'
  }
  const styleInput = {
    width: '100%'
  }
  const styleDivInput = {
    width:'45%', 
    minWidth: '30%', 
    maxWidth: '40%'
  }
  const styleDivList = {
    padding: '15px',
    border: '1px solid white',
    marginTop: '30px',
    height: '100vh'
  }

  const inpt = React.useRef()
  const [input, setInput] = React.useState('')
  const [tarefas, setTarefas] = React.useState([])

  function handleAdd(){
    if(input !== ''){
      setTarefas([...tarefas, input])
      setInput('')
    }
    inpt.current.focus()
  }

  return <>
  
    <div style={styleDivContainer}>
      <div style={styleDivInput}>
        <label htmlFor="tarefa">Tarefa: </label>
        <input style={styleInput} type="text" name="tarefa" id="tarefa" value={input} onChange={(event) => setInput(event.target.value)} ref={inpt}/>
      </div>
      <button onClick={handleAdd}>ADD</button>
    </div>
  
    <div style={styleDivList}>
      <List list={tarefas} setTarefas={setTarefas}/>
    </div>
  </>
}

export default App;