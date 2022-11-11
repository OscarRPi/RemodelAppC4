import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import * as ProductsServer from '../pages/ProductsServer'

function Categorias() {
    const {id} = useParams();
    let nCategoria = '';

    switch (id) {
        case '1':
            nCategoria = 'BAÑOS';
            break;
        case '2':
            nCategoria = 'CARPINTERIA';
            break;
        case '3':
            nCategoria = 'COCINAS';
            break;
        case '4':
            nCategoria = 'PINTURAS';
            break;
        case '5':
            nCategoria = 'PISOS';
            break;
        default:
            nCategoria = 'CATEGORIA NO DEFINIDA'
            break;
    }

    const [products, setProducts] = useState([]);

    const listProducts = async () => {
        try {
            const res = await ProductsServer.listProducts();
            const data = await res.json();
            setProducts(data.products);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        listProducts();
    }, [])

    let categoriaActiva = products.filter(producto => producto.Id_Categoria_id == id);

    return (
        <>
            <div className="centrar homeF">
                    <div class="categoriasinicio mt-4">
                        <h1>PRODUCTOS DISPONIBLES - {nCategoria}</h1>
                    </div>
            </div>
            <div class="container-fluid centrar containerproductos">
                {categoriaActiva.map((producto) => (
                    <ProductCard producto={producto} />
                ))};
            </div>  
        </>
    )
}

export default Categorias;