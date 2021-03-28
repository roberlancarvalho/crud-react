import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastroProduto from './pages/produtos/cadastro';
import ConsultaProdutos from './pages/produtos/consulta';

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
        <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
      </Switch>
    </HashRouter>
  )
}