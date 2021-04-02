import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (

  <table className="table table-hover">
    <thead>
      <tr className="table-info">
        <th>Nome</th>
        <th>SKU</th>
        <th>Preço</th>
        <th>Fornecedor</th>
        <th>Marca</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {
        props.produtos.map((produto, index) => {
          return (
            <tr key={index}>
              <th>{produto.nome}</th>
              <th>{produto.sku}</th>
              <th>{produto.preco}</th>
              <th>{produto.fornecedor}</th>
              <th>{produto.marca}</th>
              <th className="buttons">
                <button
                  onClick={() => props.editAction(produto.sku)}
                  class="btn btn-primary"
                >
                  Editar
                </button>
                <button
                  onClick={() => props.deleteAction(produto.sku)}
                  class="btn btn-danger"
                >
                  Remover
                  </button>
              </th>
            </tr>
          )
        })
      }
    </tbody>
  </table>
)