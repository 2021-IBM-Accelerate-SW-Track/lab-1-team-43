import { Button, Card, CardActions, Checkbox, Typography } from '@material-ui/core'
import {React, useState} from 'react'
import Editing from './Editing'

export default function Todo({todo}) {

    const [editing, setEditing] = useState(false)

    const cardWidth = 850 //for centering the cards aka todos, needs to be adjusted to proper screen size not static

    //When checkbox is clicked, it sets the todo to completed
    const checkBoxFunction = (event) => {
        todo.completed = event.target.checked
        console.log(todo.name + " - " + todo.completed);
    }

    //When the edit button is clicked, it allows the user to edit the todo
    const editTodo = () => {
        console.log('Editing - ' + todo.name);
        setEditing(true) // disables the button
    }

    return (
        <div style={{padding: '10px 0', position: 'relative', left: cardWidth/2}}>
            <Card style={{
                maxWidth: cardWidth,
                position: 'relative',
                padding: '0 10px',
                background: '#ecf0f1',
            }}>
                <CardActions>
                    <Button variant="contained" onClick={editTodo} disabled={editing}>Edit</Button> 
                    <Checkbox onChange={checkBoxFunction}></Checkbox>
                    <h3>{todo.name}</h3>  
                </CardActions>
                <Typography variant="subtitle2" style={{marginRight: '8px', marginBottom: '15px', color: '#595959', textAlign: 'right'}}>
                    {todo.edited ? 'Edited: ' + todo.date.toLocaleDateString() + ' - ' + todo.date.toLocaleTimeString() : 'Created: ' + todo.date.toLocaleDateString() + ' - ' + todo.date.toLocaleTimeString()}
                </Typography>
                {/**Using conditional render**/}
                {editing && <Editing todo={todo} setEditingState={setEditing} />}
            </Card>
        </div>
    )
}