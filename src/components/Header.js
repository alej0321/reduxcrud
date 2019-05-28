import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-between d-flex"> 
                <h1>
                    <Link to={'/'} className="text-dark">CRUD Redux, Fake  REST API & AXIOS</Link>
                </h1>
                
                <Link to={'/productos/nuevo'} className="btn btn-primary nuevo-post">
                    Nuevo  producto 
                </Link>
            </nav>
        );
    }
}

export default Header;