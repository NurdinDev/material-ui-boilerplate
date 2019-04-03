import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20,
        },
    });

interface IProps extends WithStyles<any> {

}

const Index = (props: IProps) => {

    return (
        <div className={props.classes.root}>
            <Typography variant="h4" gutterBottom>
                متريل ديزاين
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                example project
            </Typography>
        </div>
    );
}


export default withRoot(withStyles(styles)(Index));
