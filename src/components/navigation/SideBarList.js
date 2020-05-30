import React from 'react';
import {For} from 'react-loops';
import {A} from 'hookrouter';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const listItemsLink=[
    // {Primary:"Dashboard", href:"/", Icon:<DashboardIcon />},
    {Primary:"Recipe Book", href:"/recipe", Icon:<MenuBookIcon />},
  ]

export const mainListItems = (
         <div>
           <For
             of={listItemsLink}
             as={(item, { key }) => (
               <A
                 href={item.href}
                 style={{ textDecoration: "none", color: "inherit" }}
               >
                 <ListItem button>
                   <ListItemIcon>{item.Icon}</ListItemIcon>
                   <ListItemText primary={item.Primary} />
                 </ListItem>
               </A>
             )}
           />
         </div>
       );
