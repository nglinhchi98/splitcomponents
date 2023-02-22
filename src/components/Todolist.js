import react from 'react';

export default function Todolist(props) {
    return (
        <div>
        <table className='table'>
            <tbody>
            <tr>
                <td><b>Date</b></td>
                <td><b>Description</b></td>
            </tr>
            {
                props.todos.map((todo, index) => 
                <tr key={index}>
                <td className='item'>{todo.date}</td>
                <td className='item'>{todo.desc}</td>
                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                </tr> 
                )
            }
            </tbody>
        </table>
        </div>
    );
}