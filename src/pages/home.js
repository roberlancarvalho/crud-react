import React from 'react';
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem vindo!</h1>

      <p className="lead">Este é o seu sistema de cadastro. Utilizie a barra de navegação
      para acessar as páginas.
      </p>

      <hr className="my-4" />
      <p>Para cadastrar um novo produto, clique no botão abaixo:</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/cadastro-produtos" role="button">Cadastrar</Link>
      </p>

    </div>

  )
}

export default Home;