import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TopBar from "./components/TopBar/TopBar";
import { DesignPortfolioScene } from "./scenes/DesignPortfolioScene/DesignPorfolioScene";
import HomeScene from "./scenes/HomeScene/HomeScene";

ReactDOM.render(
    <BrowserRouter>
        <Layout>
        <TopBar />
        <Routes>
            <Route path="/" element={<HomeScene />} />
            <Route path="/design-portfolio" element={<DesignPortfolioScene />} />
        </Routes>
        </Layout>
    </BrowserRouter>,
    document.getElementById("content")
);