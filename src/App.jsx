import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signup from "./features/authentication/Signup";
import Signin from "./features/authentication/Signin";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MessageView from "./features/messageArea/MessageView";
import { UiProvider } from "./contexts/UiContext";
import NewPasswordPage from "./features/authentication/NewPasswordPage";
import ForgotPasswordPage from "./features/authentication/ForgotPasswordPage";
import NotFound from "./components/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <UiProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/m/:userId" element={<MessageView />} />
            </Route>

            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="/reset-password" element={<NewPasswordPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </UiProvider>
  );
}

export default App;
