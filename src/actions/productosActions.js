import { MOSTRAR_PRODUCTOS,
         MOSTRAR_PRODUCTO,
         ELIMINAR_PRODUCTO,
         AGREGAR_PRODUCTO,
         EDITAR_PRODUCTO} from './types';

import axios from 'axios';
import Swal from 'sweetalert2'

// GET
// action de mostrar todos los productos
// esta action solo sirve todos los datos
export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('https://my-json-server.typicode.com/alej0321/productosbootcampdb/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

// DELETE

// esta action recibe como parametro un id del post a borrar
export const borrarProducto = id => async dispatch => {
    
    await axios.delete(`https://my-json-server.typicode.com/alej0321/productosbootcampdb/productos/${id}`);
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })

    Swal.fire({
        title: 'Está seguro de borrar el producto? ',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00B200',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrarlo'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Borrado',
            'Tu producto ha sido borrado ',
            'success'
          )
        }
      })
}

// POST
export const agregarProducto = post => async dispatch => {
    // hacemos post a la api con a info que queremos insertar
    const respuesta = await axios.post(`https://my-json-server.typicode.com/alej0321/productosbootcampdb/productos`, post);
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Producto agregado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })

}

// GET
export const mostrarProducto = id => async dispatch => {
    // hacemos post a la api con a info que queremos editar
    const respuesta = await axios.get(`https://my-json-server.typicode.com/alej0321/productosbootcampdb/productos/${id}`);
    dispatch({
        type: MOSTRAR_PRODUCTO,
        payload: respuesta.data
    })
}

// PUT
// esta accion recibe el objeto con todos los datos
export const editarProducto = producto => async dispatch => {
    const respuesta = await axios.put(`https://my-json-server.typicode.com/alej0321/productosbootcampdb/productos/${producto.id}`, producto);
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Producto editado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    dispatch({
        type: EDITAR_PRODUCTO,
        payload: respuesta.data
    })
}
 