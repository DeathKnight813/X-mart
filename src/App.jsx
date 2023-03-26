import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PrimaryErrorPage from './pages/PrimaryError';

import { routes } from './utils/constants';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <PrimaryErrorPage />,
        children: routes.map(route => ({ path: route.path, element: route.element })),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
