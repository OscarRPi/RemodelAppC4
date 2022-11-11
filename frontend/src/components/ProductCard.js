import React, { useEffect, useState } from "react";
import * as ProveedorsServer from '../pages/ProveedorsServer';

const pesoCop = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
})

function ProductCard(props){

    const producto = props;

    const [proveedors, setProveedors] = useState([]);

    const listProveedors = async () => {
        try {
            const res = await ProveedorsServer.listProveedors();
            const data = await res.json();
            setProveedors(data.proveedors);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listProveedors();
    }, [])

    return (
        <div className="productos mt-4 mb-4 homeF">
            <img src={producto.producto.URL} alt="Imagen del producto" />
            <h6 className="proveedor mt-1">
                {proveedors.filter(proveedor => proveedor.Id_Proveedor == producto.producto.Id_Proveedor_id).map(filtrado => (
                    filtrado.Proveedor
                )
                )}
            </h6>
            <h4 className="tituloproducto">{producto.producto.Producto}</h4>
            <h4 className="descripcionproducto">{pesoCop.format(producto.producto.Valor)}</h4>
            <h4 className="descripcionproducto">Color: {producto.producto.Color}</h4>
            <h4 className="descripcionproducto">Material: {producto.producto.Tipo_Material}</h4>
            <button type="button" className="contactoproveedor" data-toggle="modal" data-target="#exampleModal">CONTACTAR PROVEEDOR</button>
        </div>
    )
}

export default ProductCard;