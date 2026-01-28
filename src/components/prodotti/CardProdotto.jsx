function CardProdotto({ prodotto }) {

    const { title, price, description, category, image, rating } = prodotto;

    return (
        <div className="prodotto">
            <div className="immagine-prodotto">
                <img src={image} alt={title} />
            </div>
            <div className="info-prodotto">
                <p className="nome-prdotto">{title}</p>
                <p className="prezzo-prodotto">{price}</p>
                <p className="descrizione-prodotto">{description}</p>
                <p className="categoria-prdotto">{category}</p>
                {/* <p className="valutazione-prodotto">{rating}</p> */}
            </div>
        </div>
    )
}

export default CardProdotto