import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function PopularPosts() {
  return (
    <Paper elevation={10} sx={{mt: 2, borderRadius: 5, p:0}}>
      <List sx={{ width: '100%', my:10 ,maxWidth: 360, bgcolor: 'background.paper', borderRadius: 5}}>
      <ListSubheader sx={{fontSize: 'large', borderRadius: 5}}>Popular Posts</ListSubheader>
      <Divider sx={{my: 2}}></Divider>

      <ListItem>
        <ListItemAvatar>
          <img 
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="blog-icon"
              style={{width: 50, height: 50, objectFit: 'cover'}}
          />
        </ListItemAvatar>
        <ListItemText primary="How to Optimize Your Website for SEO in 2025" secondary="October 1, 2025" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
            <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="blog-icon"
                  style={{width: 50, height: 50, objectFit: 'cover'}}
            />
        </ListItemAvatar>
        <ListItemText primary="The Future of Remote Work: Trends You Need to Know" secondary="October 5, 2025" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
            <img 
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="blog-icon"
                  style={{width: 50, height: 50, objectFit: 'cover'}}
            />
        </ListItemAvatar>
        <ListItemText primary="10 Must-Read Books for Personal Growth and Success" secondary="October 8, 2025" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
            <img 
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="blog-icon"
                style={{width: 50, height: 50, objectFit: 'cover'}}
            />
        </ListItemAvatar>
        <ListItemText primary="Exploring the Benefits of Sustainable Living in 2025" secondary="October 10, 2025" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
            <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhFQUxUSENBUkV8ZW58MHx8MHx8fDA%3D
" 
                alt="blog-icon"
                style={{width: 50, height: 50, objectFit: 'cover'}}
            />
        </ListItemAvatar>
        <ListItemText primary="How AI is Revolutionizing Healthcare in 2025" secondary="October 12, 2025" />
      </ListItem>

      <ListItem>
      <ListItemAvatar>
            <img 
                src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RUxFQ1RSSUMlMjBDQVJ8ZW58MHx8MHx8fDA%3D" 
                alt="blog-icon"
                style={{width: 50, height: 50, objectFit: 'cover'}}
            />
        </ListItemAvatar>
        <ListItemText primary="The Rise of Electric Cars: What You Need to Know for 2025" secondary="October 15, 2025" />
      </ListItem>

    </List>      
    </ Paper>
  );
}
