import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";


export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/movie/:movieId",
      element:<MovieDetails/>
    },
    {
      path:"/my-list",
      element:<MyList/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
