import LayoutContainer from "../components/LayoutContainer";
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material/';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';

const LandingPage = () => {

    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuthenticated);
    return (
        <LayoutContainer>
            <Card sx={{width: '80vw'}} raised>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                        Landing Page
                    </Typography>
                    </CardContent>
                    <CardActions sx={{alignSelf: 'center'}}>
                        {!isAuth ? <Button color='primary'  size='medium' variant='contained'
                        onClick={() => navigate('/login')}>
                            Log In
                        </Button> : <></>}
                    </CardActions>
                </Box>
            </Card>
        </LayoutContainer>
    )
};

export default LandingPage;