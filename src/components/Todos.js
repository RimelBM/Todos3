import React ,{useState} from 'react'
import List from './List'
import Task from './Task'
function Todos(props) {

    const [lista , setList] = useState (
    [{id:1,titre:'hello'},
    {id:2,titre:'hello'}]) ;

    const [todo,setTodo] = useState('') ;

    

    return (
        <div className="todos">
            <h1 >{props.title}</h1>
            <Task  onclick={setList} list={lista} todo={todo} setTodo={setTodo} />
            <List lista={lista} onclick={setList} setTodo={setTodo} />
        </div>
    )
}

export default Todos
