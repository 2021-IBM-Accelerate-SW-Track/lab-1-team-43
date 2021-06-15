import { Button, Input } from '@material-ui/core'
import {React, useRef} from 'react'

export default function Editing({todo, setEditingState}) {

    const editTextBox = useRef()

    const saved = () => {
        const name = editTextBox.current.value
        if(name === '' || todo.name === name)
            return
        for(let i = 0; i < todo.length; i++) //better way?
            if(name === todo[i].name)
                return
        console.log('Changed to - ' + name);
        todo.name = name
        const newDate = new Date();
        todo.date = newDate;
        setEditingState(false)
    }

    return (
        <div>
            <Button variant="contained" onClick={saved}>Save</Button>
            <Input type="text" inputRef={editTextBox} placeholder="Edit"></Input>
        </div>
    )
}
