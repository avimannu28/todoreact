import { useContext } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import TodoContext from "../context/TodoContext";
import {FaCheckDouble} from "react-icons/fa"
import { REMOVE_TODO } from "../context/action.types";






const ListTodo= () =>{

    const {todos,dispatch} =useContext(TodoContext)
     {console.log(todos)}
    return (
    // console.log(listing)
       
            <ListGroup className="items">
                {
                    (todos).map(todo=>(
                        <ListGroupItem key={todo.id}>
                            {todo.todoString} 
                            <span style={{float:"right"}}><FaCheckDouble  onClick={()=>{
                                dispatch({
                                    type:REMOVE_TODO,
                                    payload:todo.id
                                })
                            }}></FaCheckDouble></span>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        
    )
    
}

export default ListTodo;