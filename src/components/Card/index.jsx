import React, { useState } from "react";
import "./Card.css";
import { consumed } from "../../functions";

const Card = ({
  cardData,
  bgcolour,
  index,
  consumeStock,
  addStock,
  deleteItem,
}) => {
  const [stockIncrement, setStockIncrement] = useState("1");

  const [flipped, setFlipped] = useState(false);
  const showBack = () => {
    setFlipped(true);
  };
  const showFront = () => {
    setFlipped(false);
  };

  const addStockNumber = (event) => {
    setStockIncrement(event.target.value);
  };
  const currentItemLifeValue = consumed.currentItemLife(cardData.consumed);
  const averageItemLifeValue = consumed.averageItemLife(cardData.consumed);
  const avgBarMarginLeft = Math.min(
    (currentItemLifeValue * 230) / averageItemLifeValue,
    230
  );

  return (
    <div className="card" style={{ backgroundColor: bgcolour }}>
      {flipped ? (
        <div className="back">
          <div className="roundCorner" onClick={showFront}></div>
          <i className={"fas fa-" + cardData.icon}></i>
          <h2>{cardData.name}</h2>

          <p className="currentyQuant">
            Current quantity: <strong>{cardData.quantity}</strong>
          </p>

          <input
            type="number"
            onChange={addStockNumber}
            value={stockIncrement}
          />
          <button
            type="button"
            className="addStockBtn"
            onClick={() => {
              addStock(index, stockIncrement);
            }}
          >
            Add Stock
          </button>
          <div
            className="deleteIcon"
            onClick={() => {
              deleteItem(index);
            }}
          >
            <i
              data-icon="trash"
              className="fas fa-trash"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      ) : (
        <div className="front">
          <div className="frontRoundCorner" onClick={showBack}></div>
          <i className={"fas fa-" + cardData.icon}></i>
          <h2>{cardData.name}</h2>
          {consumed.isEmpty(cardData.consumed) ||
          !consumed.isAvgAvailable(cardData.consumed) ? null : (
            <div className="visualInfo">
              <p className="day">
                Day: <strong>{currentItemLifeValue}</strong>{" "}
              </p>
              <p className="avg">
                Average: <strong> {averageItemLifeValue}</strong>
              </p>

              <div className="infoBar">
                <div
                  className="firstDot"
                  style={{ left: avgBarMarginLeft + "px" }}
                ></div>
                <div className="secondDot"></div>
              </div>
            </div>
          )}

          <p className="descriptiveText">
            <span>
              {consumed.isEmpty(cardData.consumed) ? (
                <span>Not enough data available</span>
              ) : (
                <span>
                  Your current {cardData.name} has
                  <strong> lasted {currentItemLifeValue} days</strong> so far.
                </span>
              )}
            </span>
            <span>
              {consumed.isAvgAvailable(cardData.consumed) ? (
                <span>
                  {" "}
                  It lasts on
                  <strong> average {averageItemLifeValue} days</strong>. Based
                  on your current stock, you’re going to{" "}
                  <strong>
                    run out in{" "}
                    {consumed.whenRunsOut(cardData.consumed, cardData.quantity)}{" "}
                    days.
                  </strong>
                </span>
              ) : null}
            </span>
          </p>
          <button
            type="button"
            className="consumeBtn"
            onClick={() => {
              consumeStock(index);
            }}
          >
            Consume
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
