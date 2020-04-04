import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import store from "./store";
import history from "./routes/history";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Routes />
          <GlobalStyle />
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
