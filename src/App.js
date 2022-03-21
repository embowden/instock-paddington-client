import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Warehouses from "./components/Warehouses/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import Inventory from "./components/Inventory/Inventory";
import InventoryItemDetails from "./components/InventoryItemDetails/InventoryItemDetails";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/warehouses" />
          <Route
            exact
            path="/warehouses"
            render={(routerProps) => <Warehouses {...routerProps} />}
          />
          <Route
            path="/warehouses/details/:id"
            render={(routerProps) => <WarehouseDetails {...routerProps} />}
          />
          <Route
            path="/warehouses/edit/:warehouseId"
            render={(routerProps) => <EditWarehouse {...routerProps} />}
          />
          <Route
            path="/warehouses/add"
            render={(routerProps) => <AddNewWarehouse {...routerProps} />}
          />
          <Route
            exact
            path="/inventory"
            render={(routerProps) => <Inventory {...routerProps} />}
          />
          <Route
            path="/inventory/details/:id"
            render={(routerProps) => <InventoryItemDetails {...routerProps} />}
          />
          <Route
            path="/inventory/edit/:id"
            render={(routerProps) => <EditInventoryItem {...routerProps} />}
          />
          <Route
            path="/inventory/add"
            render={(routerProps) => <AddNewInventory {...routerProps} />}
          />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
