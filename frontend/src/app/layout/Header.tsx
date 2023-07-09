import { AppBar, Toolbar,Switch,Typography } from "@mui/material";

const midlinks = [
    {title: 'catalog', path:'/catalog'},
    {title: 'about', path:'/about'},
    {title: 'contact', path:'/contact'},

]

const rightlinks = [
    {title: 'login', path:'/login'},
    {title: 'register', path:'/register'}

]

interface Props {
    darkMode:boolean;
    handleThemeChange:() =>void;
}

export default function Header({darkMode,handleThemeChange}:Props){
    return (
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6' component={NavLink} to='/'
                sx={{colo:'inherit',textDecoration:'none'}}
                >
                    E-commerce
                </Typography>
        <Switch checked={darkMode} onChange={handleThemeChange}/>
        <List sx={{display:'flex'}}>
            {midlinks.map(({title,path})=>(
            <ListItem
            component={NavLink}
            to={path}
            sx={{color:'inherit',Typography:'h6'}}
            >
                {title.toUpperCase()}
            </ListItem>
            ))}
        </List>
        <IconButton size='large' edge='start' color='inherit' sx={{mr:2}}>
           <Badge badgeContent='4' color="secondary">
            </ShoppingCart>
           </Badge>
        </IconButton>
        <List sx={{display:'flex'}}>
            {rightlinks.map(({title,path})=>(
            <ListItem
            component={NavLink}
            to={path}
            sx={{color:'inherit',Typography:'h6'}}
            >
                {title.toUpperCase()}
            </ListItem>
            ))}
        </List>
            </Toolbar>
        </AppBar>
    )
}