import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Warehouse from "./components/Warehouses/Warehouse"


function App() {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Warehouse {...routerProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
