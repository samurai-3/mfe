import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

if(process.env.NODE_ENV === "development") {
    const div = document.querySelector("#loadReact-root");
    div && mount(div);
}
