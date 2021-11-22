import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch} from 'react-redux';
import { setAuth } from "../features/auth/authSlice";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();


  const navTheme = {
      color: '#000000',
      accent: '#0000FF',
      background: '#3B78D5',
      warning: '#DD4766',
  }
  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 60,
      width: '100%',
      backgroundColor: navTheme.accent,
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: alpha(navTheme.color, 0.7),
      '&.Mui-selected': {
        color: navTheme.color,
      },
    }),
  );

  function ColorTabs() {
    const [value, setValue] = useState(`${location.pathname}`);
    if (value === '/home'){
      setValue('/');
    }
  
    const handleChange = (e, newValue) => {
      setValue(newValue);
      navigate(newValue);
    };
    return (
      <Box sx={{ width: '100%' }}>
        <StyledTabs 
          value={value}
          onChange={handleChange}>
          <StyledTab value='/' label="Home" />
          <StyledTab value='/posts' label="Posts" /> 
          <StyledTab value='/create' label="Create" />
        </StyledTabs>  
      </Box>
    );
  }


  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <AppBar position="static" style={{background: "none", borderRadius: 0, width: '99vw'}}>
        <Toolbar>
          <ColorTabs />
            <Button style={{color: navTheme.color}} onClick={() => dispatch(setAuth())}>
              Logout
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
