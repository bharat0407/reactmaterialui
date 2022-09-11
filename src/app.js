import Feed from './components/feed';
import Add from './components/Add';
import { Box, createTheme, Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './components/navbar'
import Rightbar from './components/rightbar'
import Sidebar from './components/sidebar'
import { ThemeProvider } from '@emotion/react';

 

const App = () => {
  const[mode,setMode]= useState("light");
  const darkTheme =createTheme({
    palette:{
      mode:mode
    }
  });
  return (
  <ThemeProvider theme={darkTheme}>
  <Box bgcolor={"palette.background.default"} color={"palette.text.primary"} >
    <Navbar></Navbar>
    <Stack direction="row" spacing={5} sx={{display:"flex",justifyContent:'space-between'}} >
    <Sidebar mode={mode} setMode={setMode}></Sidebar>
    <Feed></Feed>
    <Rightbar></Rightbar>
    </Stack>
    <Add/>
  </Box>
  </ThemeProvider>
  )
}

export default App