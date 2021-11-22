import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { Button, Typography, Card, CardContent, Grid, Alert, AlertTitle, CircularProgress } from '@mui/material';
import { deletePost, getPosts } from '../features/posts/postsThunks';
import { setSelectedPost } from '../features/posts/postsSlice';
import { selectPostsLoading, selectPostsError, selectAllPosts } from '../features/posts/postsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';

const PostGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const isAuth = useSelector(selectIsAuthenticated);
  const allPosts = useSelector(selectAllPosts);
  
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const handleSelectPost = (id) => {
    dispatch(setSelectedPost(id));
    navigate(`/posts/${id}`)
  }


  const handleDeletePost = (id) => {

    dispatch(setSelectedPost(id));
    dispatch(deletePost({id}));
  }

  if (error) {
    return (
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        There was an error fetching the information!
        <div>
          <Button variant='outlined' onClick={() => dispatch(getPosts())}>
            Click to refetch
          </Button>
        </div>
      </Alert>
    )
  }

  return (
    <>
    {isAuth ? <LayoutContainer>
      {
        loading ?
        <>
          <h2>Loading...</h2>
          <CircularProgress />
        </>
        :
        <>
          <Grid container spacing={2} wrap='wrap' sx={{display: 'flex', justifyContent: 'center', padding: 2}}>
          {allPosts.map((post) => (
            <Grid item xs='auto'  key={post.id} sx={{padding:1, margin: 0}}>
              <Card sx={{width: 300, height: 200, padding: 2}}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                </CardContent>
                
              </Card>
              <Button style={{display:"absolute", lefts:"0"}} size="small" variant="contained" onClick={() => {
                    handleSelectPost(post.id)
                  }}>
                    Read
                  </Button>
                  <Button size="small"  onClick={() => {
                    handleDeletePost(post.id)
                  }}>
                    Remove
                  </Button>
            </Grid>
          ))}
          </Grid>
        </>
      }
    </LayoutContainer> : <Navigate to="/login" /> }
    </>
  );
};

export default PostGrid;