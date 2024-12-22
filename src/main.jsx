import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Homepage, LogInPage, SignUpPage, Conferencepage } from "./pages/index";
import {
  Protected,
  CreateConference,
  JoinConference,
} from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: `/conference/create`,
        element: <CreateConference />,
      },
      {
        path: `/conference/join`,
        element: <JoinConference />,
      },
      {
        path: `/conference/:conferenceID`,
        element: (
          <>
            <Conferencepage />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <LogInPage />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <SignUpPage />
          </Protected>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
