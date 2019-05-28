import React, { Component } from "react";
import { Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { borrarProducto } from "../actions/productosActions";

class Producto extends Component {
  eliminarProducto = () => {
    const { id } = this.props.info;
    this.props.borrarProducto(id);
  };

  render() {
    const { id, nombre, precio } = this.props.info;
    return (
      <React.Fragment>
          
        <li className="list-group-item">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-8 d-flex justify-content-between align-items-center">
              <p className="text-dark m-0">{id}</p>
              <p className="text-dark m-0">{nombre}</p>
              <span className="badge  text-dark">$ {precio}</span>
            </div>
            <div className="col-md-4 d-flex justify-content-end acciones">
              <Link
                to={`productos/editar/${id}`}
                className="btn btn-outline-warning mr-2"
              >
                Editar
              </Link>
              <button
                onClick={this.eliminarProducto}
                type="button"
                className="btn btn-outline-danger"
              >
                Borrar
              </button>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

// state
// no hay state porque esta función borra del state
// entonces el mapStateToProps que null

export default connect(
  null,
  { borrarProducto }
)(Producto);
