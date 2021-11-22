import {Box} from '@mui/material';
import NavBar from './NavBar';
import { selectIsAuthenticated } from "../features/auth/authSelectors";
import { useSelector } from 'react-redux';

export default function LayoutContainer({ children }) {

    const isAuth = useSelector(selectIsAuthenticated);

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            {isAuth ? <NavBar /> : <></>}
            {children}
        </Box>
    )
}

