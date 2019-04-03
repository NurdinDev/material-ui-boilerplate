import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import * as React from 'react';

const styles = () =>
    createStyles({
        //
    });

interface IProps extends WithStyles<typeof styles> {
}

const NavBar = () => {
    return <div/>;
}

export default withStyles(styles)(NavBar);
