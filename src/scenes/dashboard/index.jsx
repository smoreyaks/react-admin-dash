// MUI Components
import { Box } from "@mui/material";

// Components
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your Dashboard"
                ></Header>
            </Box>
        </Box>
    );
};

export default Dashboard;