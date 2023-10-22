import React from 'react'

const Modal = ({list, setTarefas, modal, setModal, element}) => {
  if(modal){
    return <div>
      <label htmlFor="novaTarefa">Nova tarefa</label>
      <input onChange={(event) => {
        const newList = [...list]
        if(event.target.value !== ''){
          newList[element] = event.target.value
        }
        setTarefas(newList)
      }} type="text" name="novaTarefa" id="novaTarefa" />
      <button onClick={() => setModal(false)}>OK</button>
    </div>
  }else{
    return null
  }
}

export default Modal