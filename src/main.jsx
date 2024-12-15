import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage, LogInPage, SignUpPage } from "./pages/index";

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
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      //   {
      //     path: "/all-posts",
      //     element: (
      //       <AuthLayout authentication>
      //         <AllPosts />
      //       </AuthLayout>
      //     ),
      //   },
      //   {
      //     path: "/add-post",
      //     element: (
      //       <AuthLayout authentication>
      //         <AddPostPage />
      //       </AuthLayout>
      //     ),
      //   },
      //   {
      //     path: "/edit-post/:slug",
      //     element: (
      //       <AuthLayout authentication>
      //         <EditPostPage />
      //       </AuthLayout>
      //     ),
      //   },
      //   {
      //     path: "/post/:slug",
      //     element: <Post />,
      //   },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
