import React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'

// css y drawer
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarPorps } from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LogoutIcon from '@mui/icons-material/Logout';

import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import NotificationsIcon from '@mui/icons-material/Notifications'


import { MenuItems } from './MenuItems'
import { useState } from 'react'
import  Typography  from '@mui/material/Typography'
import { NewEditor } from '../editor/NewEditor'

// width for drawer menu
const drawerWidth: number = 240;

// props form AppBar

interface AppBarProps extends MuiAppBarPorps {
    open?: boolean
}

// App bar
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })

}))

// drawer menu
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(
    ({ theme, open }) => ({
        '&.MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7),
                // breackpoints to media queries
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            })
        }
    })
)


// Define Theme
const Mytheme = createTheme()

export const Dashboard = () => {
    const [open, setOpen] = useState(true)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <ThemeProvider theme={Mytheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position='absolute' open={open}>
                    <ToolBar sx={{pr: '24px'}}>
                        <IconButton
                            edge='start'
                            color= 'inherit'
                            aria-label='open drawer'
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {
                                    display: 'none'
                                })
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                            <Typography
                                component='h1'
                                variant='h6'
                                color='inherit'
                                noWrap
                                sx={{
                                    flexGrow: 1
                                }}
                            >
                                Code verification Katas
                            </Typography>

                            <IconButton color='inherit'>
                                <Badge badgeContent={10} color='secondary'>
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <IconButton color='inherit'>
                                
                                    <LogoutIcon/>
                                
                            </IconButton>

                    </ToolBar>
                </AppBar>
                <Drawer variant='permanent' open={open} >
                    <ToolBar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1]
                        }}
                    >
                        <IconButton color='inherit' onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </ToolBar>
                    <Divider />

                    <List component='nav'>
                        {MenuItems}
                    </List>

                </Drawer>
                
                <Box
                    component='main'
                    sx= {{
                       // backgroundColor: (theme) => theme.palette.mode === 'ligth' ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '10vh',
                        overflow: 'auto'
                    }}
                >
                    <ToolBar />

                    <Container maxWidth='lg' sx={{
                        mt:4,
                        mg: 4
                    }}>
                        <Grid   item xs={12} md={8} lg={9}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240
                                }}
                            >
                            </Paper>
                        </Grid>
                        <Grid   item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240
                                }}
                            >
                            </Paper>
                        </Grid>
                        <Grid   item xs={12} >
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240
                                }}
                            >
                                <NewEditor />
                            </Paper>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}