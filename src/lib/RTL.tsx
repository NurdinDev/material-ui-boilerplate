import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import * as React from 'react';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props: any) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

export default RTL;
