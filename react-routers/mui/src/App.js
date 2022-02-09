import React, { useState } from "react";
import { Card, CardMedia, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    padding: 10,
    margin: 10,
  },
  TextField: {
    maxWidth: 620,
    padding: 10,
    margin: 10,
    width: '70%'
  }
});

const App = ({ userData }) => {
  const { posts, userName, imageUrl } = userData;
  const classes = useStyles();
  const [post, setPost] = useState('')
  const [allPosts,setAllPosts] = useState(posts)
  const addPost = (post) => {
    setAllPosts(allPosts.concat(post))
  }

  return (
    <div className="App">
      <TextField 
        multiline
        rows={6}
        label='Create a new post'
        variant="outlined"
        onChange={(e) => setPost(e.target.value)}
        value={post}
        className={classes.TextField}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          addPost(post);
        }}
        variant='contained'
        color='primary'
      >
        Save
      </Button>
      <div>
        {allPosts.map((post, index) => (
          <Card className={classes.card} variant="outlined" key={index}>
            <CardMedia component="img" image={imageUrl} alt={userName} />
            {userName} : {post}
          </Card>
        ))}
      </div>
    </div>
  );
};
export default App;
