import {Button, ButtonGroup, Container, Typography}from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage(){
    return(
        <Container>
            <Typography gutterBottom variant="h2">About Page</Typography>
        <ButtonGroup fullWidth>
            <Button variant='contained' onClick={()=>agent.TestErrors.get400Error().catch(error=>console.log(error))}>Test 400 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get401Error().catch(error=>console.log(error))}>Test 401 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get404Error().catch(error=>console.log(error))}>Test 404 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get500Error().catch(error=>console.log(error))}>Test 500 Erro</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.getValidationError().catch(error=>console.log(error))}>Test Validation Erro</Button>


        </ButtonGroup>
        </Container>
        
    )
}