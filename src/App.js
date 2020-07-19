import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Footer, Header } from "./components";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  ContactsPage,
  CreateItemPage,
  Error404,
} from "./pages";
import { itemList, basePath } from "./constants";

function App() {
  const [cardList, setCardList] = useState(itemList);
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (
      (!isLoggedIn && history.location.pathname === "/dashboard") ||
      (!isLoggedIn && history.location.pathname === "/new-item")
    ) {
      history.push(basePath);
    }
  }, [history, isLoggedIn]);

  const onLogin = (APIkey) => {
    setIsLoggedIn(true);
    history.push(basePath + "/dashboard");
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };
  const consumeStock = (cardIndex) => {
    const cardListNew = [...cardList];
    const cardNew = { ...cardList[cardIndex] };
    cardNew.consumed.push(Date.now());
    cardNew.quantity = Math.max(cardNew.quantity - 1, 0);
    cardListNew[cardIndex] = cardNew;
    setCardList(cardListNew);
  };
  const addStock = (cardIndex, additionalQuantity) => {
    const cardListNew = [...cardList];
    const cardNew = { ...cardList[cardIndex] };
    cardNew.quantity =
      parseInt(cardNew.quantity) + parseInt(additionalQuantity);
    cardListNew[cardIndex] = cardNew;
    setCardList(cardListNew);
  };

  const deleteItem = (cardIndex) => {
    const cardListNew = [...cardList];
    cardListNew.splice(cardIndex, 1);
    setCardList(cardListNew);
  };
  const onNewItem = (newItem) => {
    setCardList(cardList.concat([newItem]));
    history.push(basePath + "/dashboard");
  };
  const createNewItem = () => {
    history.push(basePath + "/new-item");
  };

  const goToHomePage = () => {
    history.push(basePath);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} goToHomePage={goToHomePage}></Header>
      <Switch>
        <Route path={basePath} exact>
          <HomePage
            isLoggedIn={isLoggedIn}
            onLogin={onLogin}
            onLogout={onLogout}
          ></HomePage>
        </Route>
        <Route path={basePath + "/dashboard"} exact>
          <DashboardPage
            cardList={cardList}
            createNewItem={createNewItem}
            consumeStock={consumeStock}
            addStock={addStock}
            deleteItem={deleteItem}
            isLoggedIn={isLoggedIn}
          ></DashboardPage>
        </Route>
        <Route path={basePath + "/new-item"} exact>
          <CreateItemPage onNewItem={onNewItem}></CreateItemPage>
        </Route>
        <Route path={basePath + "/contacts"} exact>
          <ContactsPage></ContactsPage>
        </Route>
        <Route path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
