import React from "react";
import './estilo.css';

class ListaDeCatg extends React.Component {

    constructor() {
        super()
    }



    _handlerEventoInput(e) {
        if (e.key === 'Enter') {
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = '';
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}

                </ul>
                <input type="text" className="lista-caregorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handlerEventoInput.bind(this)}
                ></input>
            </section>
        )
    }
}

export default ListaDeCatg;
