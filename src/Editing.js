import { Button, Input } from '@material-ui/core'
import {React, useRef, useState} from 'react'

export default function Editing({todo, setEditingState}) {

    const editTextBox = useRef()
    const clearReferanceValue = (ref) => ref.current.value = "";


    const [InputError, setInputError] = useState(false)

    const saved = () => {
        const name = editTextBox.current.value
        if(name === '' || todo.name === name){
            setInputError(true)
            clearReferanceValue(editTextBox)
            return
        }
        for(let i = 0; i < todo.length; i++){ //better way?
            if(name === todo[i].name){
                setInputError(true)
                clearReferanceValue(editTextBox)
                return
            }
        }
        console.log(`Changed ${todo.name} to - ${name}`);
        todo.name = name
        const newDate = new Date();
        todo.date = newDate;
        setEditingState(false)
        setInputError(false)
        clearReferanceValue(editTextBox)
        if(!todo.edited)
            todo.edited = true;
    }

    return (
        <div>
            <Button variant="contained" onClick={saved}>Save</Button>
            <Input type="text" inputRef={editTextBox} placeholder="Edit" error={InputError}></Input>
        </div>
    )
}
