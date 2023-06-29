import { MantineProvider } from "@mantine/core";
import Navigation from "./routes/Navigation";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AuthProvider>
          <Notifications />
          <Navigation />
        </AuthProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}
