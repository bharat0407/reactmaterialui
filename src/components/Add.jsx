import { Fab,Tooltip, Typography,Modal, styled,Box, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material';
import {Add as AddIcon, EmojiEmotions, Person, VideoCameraBack,Image, DateRange} from "@mui/icons-material";
import React,{useState} from 'react';
import akshuImg3 from '../images/akshu3.jpeg';


const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const[open,setOpen] = useState(false);
  return (<>
    <Tooltip onClick={e=>setOpen(true)}
    title="addPost"
    sx={{position:"fixed",bottom:"20px",left:{xs:"calc(45%)",md:30}}}
    >
    <Fab color='primary' aria-label='add'>
        <AddIcon/>
    </Fab>
    </Tooltip>
        <Modal
          sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
          }}
          open={open}
          onClose={e=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box width={300} height={280} bgcolor={"background.default"} color={"palette.background.primary"} p={3} borderRadius={5} >
            <Typography variant='h6'textAlign="center" >CreatePost</Typography>
            <UserBox>
                <Avatar alt="" src={akshuImg3}/>
                <Typography variant='h6'>Brij Kishore</Typography>
            </UserBox>
            <TextField
            sx={{width:"100%",mt:"20px"}}
          id="standard-multiline-flexible"
          multiline
          maxRows={4}
          placeholder="what's your in mind?"
          variant="standard"
        />
        <Stack direction="row" mt={2} mb={2} gap={2} >
        <EmojiEmotions color='primary'/>
        <Image color="secondry"/>
        <VideoCameraBack color='error'/>
        <Person color="success" />
        </Stack>
        <ButtonGroup 
        fullWidth
        variant="contained" aria-label="outlined primary button group">
  <Button >Post</Button>
  <Button sx={{width:"100px"}}
   ><DateRange/></Button>
</ButtonGroup>
          </Box>
    
        </Modal>
        </>
  )
}

export default Add