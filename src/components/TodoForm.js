import React, {useState} from 'react'

const TodoForm = ({insertTodo}) =>{
    
const [value, setValue] = useState('');
const handleSubmit = e=> {
    e.preventDefault();
    if(value==='') return;
    insertTodo(value);
    setValue('');
}
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={value}
            placeholder="Add new Task..."
            onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoForm;
