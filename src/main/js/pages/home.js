const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], musicos: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

	}
	render() {
		return (
			<>
				<h1>Semana 12 App (componente: HomePage)</h1>
				<Titulo entidad="Productos" emoji="🎸" />
				<ProductoList productos={this.state.productos} />
				<Link to="/nuevo-producto">Nuevo Producto</Link>
				<Titulo entidad="Musicos" emoji="🎶" />
				<MusicoList musicos={this.state.musicos} />
				<Link to="/nuevo-musico">Nuevo Músico</Link>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Acciones</th>
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component {
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.precio}</td>
				<td>
					<Link to={"/ver-producto/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Musico extends React.Component {
	render() {
		const id = this.props.musico._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={"/ver-musico/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;