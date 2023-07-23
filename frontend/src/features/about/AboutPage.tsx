import {Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography}from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage(){
    const [ValidationErrors,setValidationErrors]=useState<string[]>([]);
    function getValidationError(){
        agent.TestErrors.getValidationError()
        .then(()=>console.log('should not see this'))
        .catch(error => setValidationErrors(error));

    }
    return(
        <Container>
            <Typography gutterBottom variant="h2">About Page</Typography>
        <ButtonGroup fullWidth>
            <Button variant='contained' onClick={()=>agent.TestErrors.get400Error().catch(error=>console.log(error))}>Test 400 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get401Error().catch(error=>console.log(error))}>Test 401 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get404Error().catch(error=>console.log(error))}>Test 404 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get500Error().catch(error=>console.log(error))}>Test 500 Erro</Button>
            <Button variant='contained' onClick={getValidationError}>Test Validation Erro</Button>


        </ButtonGroup>
        {ValidationErrors.length>0 &&
        <Alert severity='error'>
            <AlertTitle>ValidationErrors</AlertTitle>
            <List>
                {ValidationErrors.map(error=> (
                 <ListItemText>{error}</ListItemText>
                ))}
            </List>
        </Alert>
        }
        </Container>
        
    )
}