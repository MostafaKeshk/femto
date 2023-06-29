import { MantineProvider } from "@mantine/core";
import Navigation from "./routes/Navigation";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import theme from "./theme";

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <AuthProvider>
          <Notifications position="bottom-center" />
          <Navigation />
        </AuthProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}
