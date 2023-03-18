import React from 'react'
import  ListItemButton  from '@mui/material/ListItemButton'
import  ListItemIcon  from '@mui/material/ListItemIcon'
import  ListItemText  from '@mui/material/ListItemText'

import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';

export const MenuItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='katas' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary='users' />
        </ListItemButton>

        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Ranking' />
        </ListItemButton>
    </React.Fragment>
)
