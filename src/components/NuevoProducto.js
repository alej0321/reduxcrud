import React, {Component} from 'react';

// redux 
import { connect } from 'react-redux';
import { agregarProducto } from '../actions/productosActions';

class NuevoProducto extends Component {

   
    state = {
        nombre: '',
        precio: '',
        error: false
    }

    
    nombreProducto = e => {
        this.setState({ nombre: e.target.value })
    }

    
    precioProducto = e => {
        this.setState({ precio: e.target.value })
    }

    editarProducto = e => {
        // para que no recargue la página
        e.preventDefault();

        
        const {nombre, precio} = this.state;

        
        if(nombre === '' || precio === ''){
            this.setState({ error: true });
            return;
        } 
        this.setState({ error:false });

        let nuevoProducto = {
            nombre,
            precio
        }
       
        this.props.agregarProducto(nuevoProducto);

       
        this.props.history.push('/');
    }


    render(){
        const {error} = this.state;
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.editarProducto}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input onChange={this.precioProducto} type="number" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
                            {/* En caso de que el state este en true (campos del formulario vacios, le hacemos buying al usuario) */}
                            {
                                error && 
                                <div className="font-weight-bold alert alert-danger text-center mt-4"> Campos vacios</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { agregarProducto })(NuevoProducto);