import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import TerminalIcon from '@mui/icons-material/Terminal';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import ExtensionIcon from '@mui/icons-material/Extension';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TerminalIcon />
      </ListItemIcon>
      <ListItemText primary="SSH" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Config" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DriveFileMoveIcon />
      </ListItemIcon>
      <ListItemText primary="Sftp" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExtensionIcon />
      </ListItemIcon>
      <ListItemText primary="Extend" />
    </ListItemButton>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton style={{marginBottom:'0%'}}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout Out" />
    </ListItemButton>
  </React.Fragment>
);