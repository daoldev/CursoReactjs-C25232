export const Item = ({prods , children}) => {
    return (                 
        <article>
            <h2>{prods.nombre}</h2>
            <p>Precio: ${prods.precio}</p>
            <p>Descripcion: {prods.descripcion}</p>
            {children}
        </article>
    );
};