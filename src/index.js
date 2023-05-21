import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from './Styles/globalStyle';
import Routes from './routes';

ReactDOM.render(
<>
    <Routes /> 
    <GlobalStyle />
</>, 
    document.getElementById("root")
);

