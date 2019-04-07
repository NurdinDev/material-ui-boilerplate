import { makeStyles, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';

const LayoutStyle = makeStyles(
  (theme: Theme): StyleRules => {
    return {
      root: {
        display: 'flex',
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    };
  }
);

export default LayoutStyle;
