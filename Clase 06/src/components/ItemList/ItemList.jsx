import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {
    return(
        <>
        {lista.length ? (
            lista.map((prod) => (
                <Item key={prod.id} {...prod}>
                    <button>Comprar</button><button>Ver Mas Info</button>
                </Item>
            ))
            ): (
                <p>No hay Productos</p>
                )
            
        }
        
        </>
    );
}