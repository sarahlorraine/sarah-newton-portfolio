import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TopBar from "./components/TopBar/TopBar";
import { DesignPortfolioScene } from "./scenes/DesignPortfolioScene/DesignPorfolioScene";
import HomeScene from "./scenes/HomeScene/HomeScene";

ReactDOM.render(
    <BrowserRouter>
        <Layout>
        <TopBar />
        <Switch>
            <Route path="/"><HomeScene /></Route>
            <Route path="/design-portfolio"><DesignPortfolioScene /></Route>
        </Switch>
        </Layout>
    </BrowserRouter>,
    document.getElementById("content")
);