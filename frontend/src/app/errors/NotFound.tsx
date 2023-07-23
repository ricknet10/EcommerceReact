import {Container,Paper,Typography,Divider,Button}from "@mui/material";
import {Link}from "react-router-dom";

export default function NotFound(){
    return(
    <Container component={Paper} sx={{height:400}}>
        <Typography gutterBottom variant='h3'>Oops - we not find</Typography>
    <Divider/>
    <Button fullWidth component={Link} to='/catalog'>Go to back to shop</Button>
    </Container>

    )
}