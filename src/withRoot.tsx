import * as React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

function withRoot<P>(Component: React.ComponentType<P>) {
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
            <MuiThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
