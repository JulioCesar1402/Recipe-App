import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Foods from './Foods';
import Drinks from './Drinks';

const MainRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={} /> */}
    <Route exact path="/comidas" component={ Foods } />
    <Route exact path="/bebidas" component={ Drinks } />
    {/* <Route exact path={`/comidas/${id-da-receita}`} component={} />
      <Route exact path={`/bebidas/${id-da-receita}`} component={} />
      <Route exact path={`/comidas/${id-da-receita}/in-progress`} component={} />
      <Route exact path={`/bebidas/${id-da-receita}/in-progress`} component={} />
      <Route exact path="/explorar" component={} />
      <Route exact path="/explorar/comidas" component={} />
      <Route exact path="/explorar/bebidas" component={} />
      <Route exact path="/explorar/comidas/ingredientes" component={} />
      <Route exact path="/explorar/bebidas/ingredientes" component={} />
      <Route exact path="/explorar/comidas/area" component={} />
      <Route exact path="/perfil" component={} />
      <Route exact path="/receitas-feitas" component={} />
      <Route exact path="/receitas-favoritas" component={} /> */}
  </Switch>
);

export default MainRouter;
