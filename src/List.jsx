import React from 'react'

const List = ({list}) => {

  return <ul className='listaTarefas'>
    {list.map((tarefa, index) => {
      return <li key={index}>
        <span>{tarefa}</span>
        <ul className='listaTarefasImagens'>
          <li><img src="./pen-solid.svg" alt="Editar" /></li>
          <li><img src="./trash-solid.svg" alt="REMOVER" /></li>
          <li><input className='inptCheck' type="checkbox" name="" id="" /></li>
        </ul>
      </li>
    })}
  </ul>
}

export default List