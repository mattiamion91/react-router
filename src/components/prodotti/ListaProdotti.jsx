import axios from "axios"
import { useState, useEffect } from "react"

import CardProdotto from "./CardProdotto";

const endpoint = "https://fakestoreapi.com/products";

function ListaProdotti() {

    // creiamo var di stato per lista prodotti
    const [prodotti, setProdotti] = useState([]);

    // funzione che al click fa chiamata Ajax verso endpoint API
    function fetchProdotti() {
        axios.get(endpoint)
            .then((res) => setProdotti(res.data))
            .catch(err => console.error("Errore nella richiesta", err))
    }

    //useEffect e senza dipendeze (solo al primo montaggio del comp)
    useEffect(fetchProdotti, []);

    return (
        <div className="container">
            <h1>Lista Prodotti</h1>
            <div className="lista-prodotti">
                {prodotti.map(prodotto => (
                    <CardProdotto
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaProdotti