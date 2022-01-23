import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Router,
  Switch,
  withRouter,
} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import TopBar from "../../components/TopBar/TopBar";
import Scene404 from "../404/404Scene";
import DesignPortfolioScene from "../DesignPortfolioScene/DesignPorfolioScene";
import HomeScene from "../HomeScene/HomeScene";

const App: React.FC<RouteComponentProps> = (props: RouteComponentProps<{}>) => {
  return (
    <Router history={props.history}>
      <Layout>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomeScene} />
          <Route path="/design-portfolio" component={DesignPortfolioScene} />
          <Route component={Scene404} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default withRouter(App);
