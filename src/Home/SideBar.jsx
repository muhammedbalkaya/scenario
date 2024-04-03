import React, { } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCreditCard, faMoneyBill, faChartLine, faCreditCardAlt, faAddressBook, faChartArea } from "@fortawesome/free-solid-svg-icons";


const SideBar = () => {
    return (
        <div className="sidebar1">
        <h3>Sidebar Title</h3>
        <div className="icon-container">
          <div className="icon">
            <FontAwesomeIcon icon={faHome} />
            <span className="icon-text">Home</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="icon-text">Credit Exposure</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faMoneyBill} />
            <span className="icon-text">Collateral</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faChartLine} />
            <span className="icon-text">Macro Economic Variables</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCreditCardAlt} />
            <span className="icon-text">Credit</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faAddressBook} />
            <span className="icon-text">Portfolio</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faChartArea} />
            <span className="icon-text">Volatility</span>
          </div>
        </div>
      </div>
      );
}

export default SideBar;