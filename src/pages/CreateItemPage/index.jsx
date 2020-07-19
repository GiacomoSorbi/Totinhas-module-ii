import React, { useState } from "react";
import "./CreateItemPage.css";
import { iconList } from "../../constants";
import { validation } from "../../functions";

const CreateItemPage = ({ onNewItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("0");
  const [iconSearch, setIconSearch] = useState("");
  const [filterIcon, setFilterIcon] = useState(iconList.slice(0, 9));
  const [selectedIcon, setSelectedIcon] = useState("");
  const [itemNameValid, setItemNameValid] = useState(true);
  const [itemIconValid, setItemIconValid] = useState(true);
  const [isQuantityValid, setIsQuantityValid] = useState(true);

  const onChangeItemName = (event) => {
    setItemName(event.target.value);
    setItemNameValid(validation.name(event.target.value));
  };
  const onChangeItemQuantity = (event) => {
    setItemQuantity(event.target.value);
  };

  const onChangeIconSearch = (event) => {
    setIconSearch(event.target.value);
    const filterediconList = iconList.filter((icon) =>
      icon.includes(event.target.value)
    );
    setFilterIcon(filterediconList.slice(0, 9));
  };

  const onClickIcon = (event) => {
    setSelectedIcon(event.target.dataset.icon);
  };

  const onCreateNewItem = () => {
    setItemNameValid(validation.name(itemName));
    setItemIconValid(validation.isIconValid(selectedIcon));
    setIsQuantityValid(validation.isQuantityValid(itemQuantity));

    if (
      validation.name(itemName) &&
      validation.isIconValid(selectedIcon) &&
      validation.isQuantityValid(itemQuantity)
    ) {
      onNewItem({
        name: itemName,
        icon: selectedIcon,
        quantity: itemQuantity,
        consumed: [],
      });
    }
  };

  return (
    <div className="createItem">
      <form>
        <h2>Create new item</h2>
        <p>Field with an * are mandatory.</p>
        <label htmlFor="itemName">
          Item Name:<sup> *</sup>
        </label>
        <input
          placeholder="Water"
          type="text"
          name="itemName"
          value={itemName}
          onChange={onChangeItemName}
        />
        {itemNameValid ? null : (
          <p className="errorName">please inset a valid name</p>
        )}
        <label htmlFor="iconSearch">
          Icons:<sup> *</sup>
        </label>
        <input
          placeholder="Water"
          type="text"
          name="iconSearch"
          value={iconSearch}
          onChange={onChangeIconSearch}
        />
        <div className="iconsList">
          {filterIcon.map((icon, index) => {
            return (
              <i
                onClick={onClickIcon}
                data-icon={icon}
                key={index}
                className={
                  "fas fa-" +
                  icon +
                  (icon === selectedIcon ? " selectedIcon" : "")
                }
              ></i>
            );
          })}
          {itemIconValid ? null : (
            <p className="errorIcon">please select an item</p>
          )}
        </div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          placeholder="2"
          type="number"
          name="quantity"
          value={itemQuantity}
          onChange={onChangeItemQuantity}
        />
        {isQuantityValid ? null : (
          <p className="errorQuantity">please insert a quantity</p>
        )}
        <button type="button" onClick={onCreateNewItem}>
          Create item
        </button>
      </form>
    </div>
  );
};

export default CreateItemPage;
