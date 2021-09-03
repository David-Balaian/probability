import React from 'react'
import { TextField, Button, Paper } from '@material-ui/core/'
import styles from './addItem.module.css'
import useAddItems from './useAddItems';
import { itemValues } from './constants';


export default function Item() {

    const {
        errors,
        touched,
        values,
        handleSubmit,
        handleChange,
        handleReset,
    } = useAddItems()

    return (
        <div className={styles.itemCont}>
            <Paper elevation={3} className={styles.paper}>
                {itemValues.map(item => (
                    <TextField
                        className={styles.input}
                        fullWidth
                        key={item.label}
                        name={item.label}
                        type={item.type}
                        value={values[item.label]}
                        error={touched[item.label] && !!errors[item.label]}
                        helperText={touched[item.label] && errors[item.label]}
                        onChange={handleChange}
                        variant="outlined"
                        label={item.label}
                        InputLabelProps={{ shrink: true }}
                    />
                ))}
                <div className={styles.btnCont}>
                    <Button
                        fullWidth
                        onClick={handleReset}
                        variant="outlined"
                        color="secondary"
                    >
                        Reset
                    </Button>
                    <Button
                        fullWidth
                        onClick={handleSubmit}
                        variant="outlined"
                        color="primary"
                    >
                        Save
                    </Button>
                </div>
            </Paper>
        </div>
    )
}
