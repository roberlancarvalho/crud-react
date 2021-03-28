import React from 'react';
import { withRouter } from 'react-router-dom';

import ProdutoService from '../../app/produtoService'
import Card from '../../components/Card';

const estadoInicial = {
  nome: '',
  sku: '',
  descricao: '',
  preco: '0,00',
  marca: '',
  fornecedor: '',
  sucesso: false,
  errors: [],
  atualizando: false,
}

class CadastroProduto extends React.Component {

  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      marca: this.state.marca,
      fornecedor: this.state.fornecedor
    }
    try {
      this.service.salvar(produto)
      this.limpaCampos()
      this.setState({ sucesso: true })
    } catch (erro) {
      const errors = erro.errors
      this.setState({ errors: errors })
    }
  }

  limpaCampos = () => {
    this.setState(estadoInicial)
  }

  componentDidMount() {
    const sku = this.props.match.params.sku

    if (sku) {
      const resultado = this
        .service
        .obterProdutos().filter(produto => produto.sku === sku)
      if (resultado.length === 1) {
        const produtoEncontrado = resultado[0]
        this.setState({ ...produtoEncontrado, atualizando: true })
      }
    }
  }

  render() {
    return (

      <Card header={this.state.atualizando ? 'Editação de Produto' : 'Cadastro de Produto'} >

        <form id="formProduto" onSubmit={this.onSubmit}>

          {this.state.sucesso &&
            <div class="alert alert-dismissible alert-success">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Ótimo!</strong> Cadastro realizado com sucesso.
              </div>
          }

          {
            this.state.errors && this.state.errors.length > 0 &&

            this.state.errors.map(msg => {
              return (
                <div class="alert alert-dismissible alert-danger">
                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                  <strong>Erro!</strong> {msg}
                </div>
              )
            })
          }


          <div className="row">

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.onChange}
                  value={this.state.nome}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  disabled={this.state.atualizando}
                  onChange={this.onChange}
                  value={this.state.sku}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea
                  name="descricao"
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  type="number"
                  name="preco"
                  onChange={this.onChange}
                  value={this.state.preco}
                  placeholder={this.state.preco}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  type="text"
                  name="fornecedor"
                  onChange={this.onChange}
                  value={this.state.fornecedor}
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label>Marca: *</label>
                <input
                  type="text"
                  name="marca"
                  onChange={this.onChange}
                  value={this.state.marca}
                  className="form-control"
                />
              </div>
            </div>

          </div>

          <div className="row justify-content-center">
            <div className="col-md-1">
              <button type="submit" className="btn btn-success">
                {this.state.atualizando ? 'Atualizar' : 'Salvar'}
              </button>
            </div>

            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
            </div>

            <div className="col-md-1">
              <button className="btn btn-outline-info">Voltar
               </button>
            </div>
          </div>
        </form>
      </Card>
    )
  }
}

export default withRouter(CadastroProduto);