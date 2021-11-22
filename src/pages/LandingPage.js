import LayoutContainer from "../components/LayoutContainer";
import { Card, CardContent, CardActions, Typography, Box } from '@mui/material/';

const LandingPage = () => {

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
                    </CardActions>
                </Box>
            </Card>
        </LayoutContainer>
    )
};

export default LandingPage;