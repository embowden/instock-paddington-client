import "./App.css";

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
