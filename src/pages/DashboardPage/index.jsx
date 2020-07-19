import React from "react";
import "./DashboardPage.css";
import { Card } from "../../components";
import { colours } from "../../constants";

const DashboardPage = ({
  cardList,
  createNewItem,
  consumeStock,
  addStock,
  deleteItem,
  isLoggedIn,
}) => {
  return (
    <div className="dashboard">
      {cardList.length > 0 ? (
        <div>
          <div className="addItem" onClick={createNewItem}>
            <i className="fas fa-plus"></i>
          </div>
          {cardList.map((card, index) => {
            return (
              <Card
                key={index}
                index={index}
                cardData={card}
                bgcolour={colours[index % colours.length]}
                consumeStock={consumeStock}
                addStock={addStock}
                deleteItem={deleteItem}
              ></Card>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="addItem centered" onClick={createNewItem}>
            <i className="fas fa-plus"></i>
          </div>
          <p className="addItemText">
            You don’t have any items to track, just yet. Use the button above
            your name to start tracking!
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
