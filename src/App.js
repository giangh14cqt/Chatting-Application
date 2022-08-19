import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
