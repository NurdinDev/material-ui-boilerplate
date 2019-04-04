import * as React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { List, Theme } from '@material-ui/core';
import { StyleRules, useTheme, makeStyles } from '@material-ui/core/styles';
import MenuItems from '../../config/MenuItems';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { LinkComponent } from '../../components/LinkComponent';
import themeVariables from '../../lib/themeVariables';

const useStyle = makeStyles(
  (theme: Theme): StyleRules => {
    return {
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: themeVariables.drawerWidth,
          flexShrink: 0,
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: themeVariables.drawerWidth,
      },
    };
  }
);

const Menu = (props: any) => {
  const theme: Theme = useTheme();
  const classes = useStyle();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {MenuItems.map(item => (
          <ListItem key={item.key} component={LinkComponent} href={item.href}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'left' : 'right'}
          open={props.open}
          onClose={props.onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Menu;
