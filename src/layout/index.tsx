import * as React from 'react';
import LayoutStyle from './style';
import Header from './partials/Header';
import Menu from './partials/Menu';

const Layout = (props: any) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = LayoutStyle();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header menuIconToggle={handleDrawerToggle} />
      <Menu onClose={handleDrawerToggle} open={mobileOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
