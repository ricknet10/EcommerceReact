import './styles.css';
import Catalog from '../../features/catalog/catalog';
import { Container,createTheme, CssBaseline,ThemeProvider } from '@mui/material';
import Header from './Header';
import {useState}from "react";


function App() {
  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark':'light';
 const theme = createTheme({
  palete: {
    mode:paletteType,
    background:{
      default: paletteType==='light' ? '#eaeaea':'#121212'
    }
  }
 })

 function handleThemeChange(){
  setDarkMode(!darkMode);
 }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     <Container>
     <Outlet />
     </Container>
</ThemeProvider>
    
  );
}

export default App;
