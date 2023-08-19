const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');
const VerProductoPage = require('./pages/ver-producto');
const NuevoProductoPage = require('./pages/nuevo-producto');
const VerMusicoPage = require('./pages/ver-musico');

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-producto/:id', element: <VerProductoPage /> },
	{ path: '/nuevo-producto', element: <NuevoProductoPage /> },
	{ path: '/ver-musico/:id', element: <VerMusicoPage /> },
	{ path: '/nuevo-musico', element: <NuevoMusicoPage /> },
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
