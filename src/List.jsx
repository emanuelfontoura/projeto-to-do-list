import React from 'react'

const List = ({list, setTarefas, setModal, element, setElement}) => {
  function handleClickRemove(i){
    const updatedItems = list.filter((_, index) => index !== i)
    setTarefas(updatedItems)
  }

  return <ul className='listaTarefas'>
    {list.map((tarefa, index) => {
      return <li key={index}>
        <span>{tarefa}</span>
        <ul className='listaTarefasImagens'>
          <li><img onClick={() => {
            setModal(true)
            setElement(index)
          }} src="./pen-solid.svg" alt="Editar" /></li>
          <li><img onClick={() => handleClickRemove(index)} src="./trash-solid.svg" alt="REMOVER" /></li>
          <li><input className='inptCheck' type="checkbox" name="" id="" /></li>
        </ul>
      </li>
    })}
  </ul>
}

export default List