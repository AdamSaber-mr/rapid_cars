import { createHashRouter } from "react-router-dom";
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Aanbod } from './pages/Aanbod';
import { Contact } from './pages/Contact';
import { OverOns } from './pages/OverOns';

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'aanbod', Component: Aanbod },
      { path: 'contact', Component: Contact },
      { path: 'over-ons', Component: OverOns },
    ],
  },
]);