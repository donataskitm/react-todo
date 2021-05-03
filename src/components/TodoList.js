import React from 'react'

const TodoList = ({task, index}) =>{
    

    return (
        <div className="row">
            <div className='col'>{index+1}</div>
            <div className='col'>{task.text}</div>
            <div className='col'>{task.isCompleted? 'Done': 'In progress...'}</div>
        </div>
    )
}
export default TodoList;
