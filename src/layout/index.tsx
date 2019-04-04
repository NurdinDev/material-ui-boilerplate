import * as React from 'react';
import { List, Theme, IconButton } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItems from '../config/MenuItems';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/styles';
import { themeVariables } from '../theme';
import MenuIcon from '@material-ui/icons/Menu';
import { StyleRules } from '@material-ui/styles/withStyles';

const useStyles = makeStyles(
  (theme: Theme): StyleRules<{}, any> => {
    return {
      root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: themeVariables.drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        marginLeft: themeVariables.drawerWidth,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${themeVariables.drawerWidth}px)`,
        },
      },
      menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: themeVariables.drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: 6,
      },
    };
  }
);

const Layout = (props: any) => {
  const { container } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles();
  const theme: Theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {MenuItems.map(item => (
          <ListItem button key={item.key}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}            open={mobileOpen}
            onClose={handleDrawerToggle}
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
