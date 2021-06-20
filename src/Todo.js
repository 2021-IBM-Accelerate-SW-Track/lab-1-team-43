import { Button, Card, CardActions, Checkbox, Typography, FormControlLabel } from '@material-ui/core'
import {React, useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Editing from './Editing'

const GreenCheckbox = withStyles({
    root: {
        color: '#03AC13',
        '&$checked':{
            color: '#03C04A',
        },
    },
    checked: {},
})((props) => <Checkbox color='default' {...props}/>);

export default function Todo({todo}) {

    const [editing, setEditing] = useState(false)
    const [checked, setChecked] = useState(false)

    const cardWidth = 850 //for centering the cards aka todos

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

    const doneCheckBoxFunction = (event) => {
        setChecked(event.target.checked);
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
                    <FormControlLabel
                        style={{position: 'absolute', right: '0px'}}
                        control={<GreenCheckbox checked={checked} onChange={doneCheckBoxFunction}/>}
                        label="Done"
                    />
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
