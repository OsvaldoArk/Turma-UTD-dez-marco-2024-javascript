import './estilo.css';

function Lista(props){
    return( 
            <>
              <h1>{props.jiraya}</h1>
              <p style={{color:props.cor}}>Lista de {props.tipolista}</p>
              <ol className="lista" type={props.tipo}>
                  {/*props.children.map(item => <li>{item} </li>)*/}
                  {props.children}
                </ol>
            </>
          )
}

export default Lista;