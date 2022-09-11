import {Avatar,AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import img from "../images/user.jpeg";
import akshuImg from '../images/akshu.jpeg';
import akshuImg1 from '../images/akshu1.jpeg';
import akshuImg2 from '../images/akshu2.jpeg';
import akshuImg3 from '../images/akshu3.jpeg';

const Rightbar = () => {
  return (
      <Box flex={2} sx={{display:{xs:"none",sm:"block"}}}>
          <Box position="fixed">
           <Typography variant='h6' fontWeight={200} mt={2} mb={2} >Online Friends</Typography>
           <AvatarGroup max={6}>
  <Avatar alt="Remy Sharp" src={img}/>
  <Avatar alt="Travis Howard" src={akshuImg} />
  <Avatar alt="Cindy Baker" src={img} />
  <Avatar alt="Agnes Walker" src={akshuImg1} />
  <Avatar alt="Trevor Henderson" src={img} />
  <Avatar alt="Trevor Henderson" src={akshuImg2} />
  <Avatar alt="Trevor Henderson" src={akshuImg3} />
</AvatarGroup>
<Typography variant='h6' fontWeight={200} mt={2} mb={2} >Latest Photos</Typography>
<ImageList  cols={3} rowHeight={100}>
        <ImageListItem>
          <img
            src={akshuImg}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={akshuImg1}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={akshuImg2}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={akshuImg3}
            alt=""
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
    <Typography variant='h6' fontWeight={200} mt={2} mb={2} >Latest Conversation </Typography>
    <List>
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={akshuImg1} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={akshuImg3} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
          </Box>
      </Box>
  )
}

export default Rightbar;