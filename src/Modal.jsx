import React from 'react'

const Modal = ({modal, setModal, element}) => {
  if(modal){
    return <div>
      <label htmlFor="novaTarefa">Nova tarefa</label>
      <input onChange={(event) => {
        if(event.target.value !== ''){
          element.current.innerText = event.target.value
        }
      }} type="text" name="novaTarefa" id="novaTarefa" />
      <button onClick={() => setModal(false)}>OK</button>
    </div>
  }else{
    return null
  }
}

export default Modal