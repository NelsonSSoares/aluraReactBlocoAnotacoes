import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCatg from "./components/ListaDeCarg/ListaDeCategorias";
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:['Games','Musica']
    }
  }

  adicionarCategoria(nome){
    const novoArrayCateg = [...this.state.categorias, nome]
    const novoEstado = {...this.state, categorias:novoArrayCateg}
    this.setState(novoEstado)
    
  }

  criarNota(titulo, texto, categorias){
    const novaNota = {titulo, texto, categorias};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias}
         criarNota={this.criarNota.bind(this)}/>

        <main>
          <ListaDeCatg
           categorias={this.state.categorias} className="conteudo-principal"
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
        </main>

        <ListaDeNotas notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
