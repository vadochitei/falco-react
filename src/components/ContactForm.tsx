import React, {useState,useEffect} from 'react'

import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import './ContactForm.css'
import { Status } from '../models/status'
import { Event } from '../models/event'

const ContactForm = (props: any) => {
    const [state, setState] = useState({...new Event()})
    const handleChange = (evt: any) => {
        const value = evt.target.value;
        console.log(evt.target)
        setState({
          ...state,
          [evt.target.name]: value
        });
    }
    const submitEvent = (evt: any) => {
        evt.preventDefault();
        console.log(state)
    }

    return (
        <div className="form-container">
            <div className="form-inner-container">
                <div className='title'>
                    <SendIcon sx={{ mr: 1 }} />
                    <Typography component="h1" variant="h5">Contactez-nous !</Typography>
                </div>
                <Box 
                    component="form" 
                    onSubmit={submitEvent} 
                    noValidate
                    sx={{ '& .MuiGrid-root': { mt: 2, width: '100%', pl: '8px', pr: '8px', } }}
                >
                    <Grid container>
                        <Grid 
                            item xs={4}
                            sx={{ '& .MuiFormControl-root': { minWidth: '100%', } }}
                        >
                            <FormControl variant="standard">
                                <InputLabel id="status">Status</InputLabel>
                                <Select
                                    labelId="status"
                                    id="status"
                                    value={state.status}
                                    label="Status"
                                    name="status"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={Status.MR}>{Status.MR}</MenuItem>
                                    <MenuItem value={Status.MME}>{Status.MME}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid 
                            item xs={8}
                            sx={{ '& .MuiFormControl-root': { minWidth: '100%', } }}
                        >
                            <TextField
                                variant="standard"
                                label="Nom (et prénom) *"
                                id="name"
                                name="name"
                                defaultValue={state.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid 
                            item xs={12}
                            sx={{
                                '& .MuiFormControl-root': {
                                    minWidth: '100%',
                                }
                            }}
                        >
                            <TextField
                                variant="standard"
                                label="Email *"
                                id="email"
                                name="email"
                                defaultValue={state.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid 
                            item xs={12}
                            sx={{ '& .MuiFormControl-root': { minWidth: '100%', } }}
                        >
                            <TextField
                                variant="standard"
                                label="Numéro de telephone"
                                id="phoneNumber"
                                name="phoneNumber"
                                defaultValue={state.phoneNumber}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid 
                            item xs={12}
                            sx={{ '& .MuiFormControl-root': { minWidth: '100%', } }}
                        >
                            <TextField
                                multiline
                                rows={2}
                                variant="standard"
                                label="Message"
                                id="message"
                                name="message"
                                defaultValue={state.message}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Box textAlign='center'>
                        <Button
                            disableElevation
                            type="submit"
                            variant="contained"
                            sx={{ m: 3, pl: 5, pr: 5, pt: 1, pb: 1,
                                borderRadius: '20px',
                                '&.MuiButton-contained': {
                                    color: '#fff',
                                    background: '#6266e4',
                                    textTransform: "none",
                                    width: '70%',
                                    '&:hover': {
                                        color: '#c2c7f8',
                                        background: '#4c55ae',
                                    }
                                }
                            }}
                        >
                            Envoyer
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default ContactForm