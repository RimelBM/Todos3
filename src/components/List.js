import React from 'react'

const List = ({lista, onclick, setTodo}) => {

    

    function deleteTodo(id)
    {
        onclick(lista.filter( (todo)=> todo.id !== id ))
    }

 

      const editTodo =(id) => {

        onclick(lista.filter( (todo)=> todo.id !== id )) ;
    
        const todoToEdit = lista.find(todo => todo.id === id)
        console.log(todoToEdit) ;
    
        setTodo(todoToEdit.titre);

      }

    
    return (
        <div >
            
            
          {lista.map((tasked)=>(
        

            <div className="list">

              <div>

                <button   onClick={()=>deleteTodo(tasked.id)}> X </button>

                <button  onClick={()=>editTodo(tasked.id)}> Edit </button>
               
               </div>
               <di>                
                 <h1 >{tasked.titre}</h1>
                 </di>
                 <div></div>


            </div>    )


          )} 
            
            
            
            
    </div>
    
    
    
            
        
    )
}

export default List
