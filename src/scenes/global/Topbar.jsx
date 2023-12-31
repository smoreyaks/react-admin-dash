// React Hooks
import { useContext } from "react";

// MUI Components
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";

// Theme
import { ColorModeContext, tokens } from "../../theme";

// MUI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

// Navbar
const Topbar = () => {
    // Theme
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Context
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                {/* Search Bar */}
                <InputBase
                    sx={{
                        ml: 2,
                        flex: 1,
                    }}
                    placeholder="Search"
                />
                <IconButton
                    type="button"
                    sx={{
                        p: 1,
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Navigation Settings & User Icons */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
