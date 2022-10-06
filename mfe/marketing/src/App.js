import { StylesProvider } from "@material-ui/core";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
    return (
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}