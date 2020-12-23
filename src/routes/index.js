import React, { lazy, Suspense } from 'react';
import {Layout} from "antd";
import { Route, Switch, Redirect } from 'react-router-dom';
const SiderBar = lazy(() => import('../components/layout/SiderBar'));
const HeaderBar = lazy(() => import('../components/layout/HeaderBar'));
const diolog = lazy(() => import('../components/diolog/diolog'));

const Home = lazy(() => import('../pages/home/Home'));
const All = lazy(() => import('../pages/all/All'));
const Project = lazy(() => import('../pages/project/Project'));
const Team = lazy(() => import('../pages/team/Team'));
const Bug = lazy(() => import('../pages/bug/Bug'));
const Syn = lazy(() => import('../pages/syn/Syn'));

class Index extends React.Component {

  render() {
    const mainPage = (
      <Layout>
        <SiderBar></SiderBar>
        <Layout>
          <HeaderBar>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/all" component={ All }/>
                <Route path="/project" component={ Project }/>
                <Route path="/team" component={ Team }/>
                <Route path="/bug" component={ Bug }/>
                <Route path="/syn" component={ Syn }/>
              </Switch>
          </HeaderBar>
          <div className="layout-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/all" component={ All }/>
                <Route path="/project" component={ Project }/>
                <Route path="/team" component={ Team }/>
                <Route path="/bug" component={ Bug }/>
                <Route path="/syn" component={ Syn }/>
              </Switch>
            </Suspense>
          </div>
        </Layout>
      </Layout>
    );
    return (
        mainPage
    );
  }
}

export default Index;
