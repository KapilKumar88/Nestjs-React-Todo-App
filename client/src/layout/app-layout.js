import { useState } from 'react';
import Box from '@mui/material/Box';
import NavBar from "./navbar/nav-bar";
import SideBar from "./sidebar/side-bar";

const AppLayout = ({children}) => {
    const drawerWidth = 240;
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer}></NavBar>
            <SideBar drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer}></SideBar>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default AppLayout;