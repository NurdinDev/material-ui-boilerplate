import * as React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import {create} from "jss";
import jssPreset from "@material-ui/core/styles/jssPreset";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import JssProvider from "react-jss/lib/JssProvider";

function withRoot<P>(Component: React.ComponentType<P>) {
    const generateClassName = createGenerateClassName();
    const jss = create({
        ...jssPreset(),
        // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
        insertionPoint: 'jss-insertion-point',
    });

    function WithRoot(props: P) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.

        import('webfontloader').then(WebFont => {
            WebFont.load({
                custom: {
                    families: [
                        'Noto Sans Kufi Arabic:n4,n7',
                        'Noto Sans Naskh Arabic:n4,n7',
                    ],
                    urls: ['/fonts.css'],
                },
            });
        });

        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...props} />
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
