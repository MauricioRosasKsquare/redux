import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, Navigate} from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { selectSpecificPost } from '../features/posts/postsSelectors';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from "../features/auth/authSelectors";


  
const PostView = () => {
    const navigate = useNavigate();    
    const post = useSelector(selectSpecificPost);
    const isAuth = useSelector(selectIsAuthenticated);
    
    const handleReturnToDashboard = () => {
        navigate('/posts');
    };
    
    if (!post) return <Navigate to='/posts' />; 
    console.log(isAuth)
    return (
        <>
        {isAuth ? (<LayoutContainer>
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
            {post.title}
            </Typography>
            <Typography gutterBottom variant='body1' component='div'>
            {post.body}
            </Typography>
        </CardContent>
        </Card>
        <Button
            style={{ marginTop: '2rem' }}
            color='primary'
            onClick={handleReturnToDashboard}
        >
            Return to dashboard
        </Button>
        </LayoutContainer> ) : <Navigate to="/" />}
        </>
    );
};
  
  export default PostView;
  