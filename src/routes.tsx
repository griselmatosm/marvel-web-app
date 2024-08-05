/* eslint-disable react/react-in-jsx-scope */

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AllCharacters, CharacterDetail, Favorites } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllCharacters />
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/character/:characterId",
        element: <CharacterDetail />
      }
    ],
  },
]);

export default router;
