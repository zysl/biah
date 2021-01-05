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
<<<<<<< HEAD
const Bug = lazy(() => import('../pages/bug/Bug'));
=======
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
const Syn = lazy(() => import('../pages/syn/Syn'));

class Index extends React.Component {

  render() {
    const mainPage = (
      <Layout>
<<<<<<< HEAD
        <SiderBar></SiderBar>
=======
        {/*<SiderBar></SiderBar>*/}
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
        <Layout>
          <HeaderBar>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/all" component={ All }/>
                <Route path="/project" component={ Project }/>
                <Route path="/team" component={ Team }/>
<<<<<<< HEAD
                <Route path="/bug" component={ Bug }/>
=======
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
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
<<<<<<< HEAD
                <Route path="/bug" component={ Bug }/>
=======
>>>>>>> 862198c11d7bf4186af4f4752e9ad287176aab86
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
