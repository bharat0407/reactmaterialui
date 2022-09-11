import React from 'react';
import {Checkbox ,Typography, Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardActions, CardContent,} from '@mui/material';
import { MoreVert,ShareOutlined,FavoriteBorder,Favorite } from '@mui/icons-material'
import CardImg from '../images/tutor1.jpeg';
import akshuImg3 from '../images/akshu3.jpeg';
const Post = () => {
  return (
<Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor:"red" }}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    }
                    title="Brij Kishore"
                    subheader="September 10, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={akshuImg3}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
                    </IconButton>
                
                    <IconButton >
                    <ShareOutlined/>
                    </IconButton>
                </CardActions>

            </Card>
        </Box>
  )
}

export default Post;