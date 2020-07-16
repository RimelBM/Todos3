import React  from 'react'

function Task({onclick,list,todo,setTodo}) {

    

    const onclicked =() => {

        if(todo != '')
        {

        onclick([{id: Date.now() ,titre:todo},...list]);
        setTodo('') ;
        }

    }

    return (
        <div className ="task">
            <input placeholder="Add a task" value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={onclicked} >Add</button>
        </div>
    )
}

export default Task
