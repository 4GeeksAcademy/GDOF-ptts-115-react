
export const ImgCard = ({ imagen, nombre, texto }) => {

    return (
        <>

            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"> {texto}
                    </p>
                    <a href="https://es.react.dev/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </>
    );
}

