import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material'

const UpdateTodo = ({ updateTodoFunc, removeAllFunc }) => {

    const [state, updateState] = useState({oldContent: "", newContent: ""});

    const onOldChange = (event) => {
        updateState({...state, oldContent: event.target.value});
    }

    const onNewChange = (event) => {
        updateState({...state, newContent: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.oldContent.trim()) {
            updateTodoFunc(state.oldContent, state.newContent);
            updateState({oldContent: "", newContent: ""});
        }
    }

    const handleRemoveAllSubmit = (event) => {
        event.preventDefault();
        removeAllFunc();
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    label='Old Content'
                    onChange={onOldChange}
                    value={state.oldContent}
                />
                <TextField
                    label='New Content'
                    onChange={onNewChange}
                    value={state.newContent}
                />
                <Button
                    onClick={handleSubmit}
                    variant='contained'
                >Update</Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    onClick={handleRemoveAllSubmit}
                    variant='contained'
                >RemoveAll</Button>
            </Grid>
        </Grid>
    );
}

export default UpdateTodo;