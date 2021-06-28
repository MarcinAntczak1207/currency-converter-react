import React from "react";
import "./style.css";

const Container = (props) => (
    <main className="body">
        {props.children}
    </main>
);

export default Container;