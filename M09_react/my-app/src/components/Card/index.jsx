import './estilo.css';

function Card({propriedade}){

   // const {nome,data,descricao} = propriedade;

    return(
        <>
            <section className="card">
                <header>
                    <h6>{propriedade.nome}</h6>
                    <p>{propriedade.data}</p>
                </header>
                <p>
                    {propriedade.descricao}
                </p>
            </section>
        </>
    );
}

export default Card;