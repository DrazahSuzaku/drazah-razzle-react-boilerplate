import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const constructTheme = (prefersDarkMode, mode) => {

  return createMuiTheme({
      palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
              main: mode === 'admin' ? indigo[500] : red[600],
              contrastText: '#fff',
          },
          secondary: {
              main: mode === 'admin' ? red[600] : indigo[500],
              contrastText: '#fff',
          }

      },
      typography: {
          h2: {
              fontSize : 18,
              fontWeight: "bold"
          }
      }
  })
};


