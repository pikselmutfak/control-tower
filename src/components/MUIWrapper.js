// MUIWrapper.js
import { createContext, useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Import the desired dropdown icon


export const MUIWrapperContext = createContext();

const MUIWrapper = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      background:{
        default:"#FBFBFB"
      }
    },
    
    typography: {
      fontFamily: "Roboto",
      button: {
        textTransform: "none",
        fontWeight: 300,
        fontSize: "16px",
      },
      body1: {
        fontWeight: 400,
        fontSize: "16px",
      },
      body2: {
        fontWeight: 300,
        fontSize: "14px",
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: "16px",
      },
      h5: {
        fontWeight: 700,
        fontSize: "28px",
      },
      h6: {
        fontWeight: 700,
        fontSize: "18px",
      },
      caption: {
        fontWeight: 700,
        fontSize: "12px",
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: "16px",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root": {
              borderColor: `yellow`, // Set the border color to red
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            fontSize: "16px",
            "& svg": {
              fontSize: "1.5em", // Adjust the size as needed
            },
          },
        },
        defaultProps: {
          IconComponent: KeyboardArrowDownIcon, // Set the custom dropdown icon
        },
      
      },
    },
  });

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const cache = createCache({ key: "mui", prepend: true });

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={cache}>{children}</CacheProvider>
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
};

export default MUIWrapper;
