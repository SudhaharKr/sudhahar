import React from "react";
import "../Works/Works.css";
import { Tabs } from "@mantine/core";
import WeboneyImage from "../../Assets/Portfolio/weboney.png";
import HeadphoneImage from "../../Assets/Portfolio/headphone.png";
import ECommeceImage from "../../Assets/Portfolio/commerce.png";
import BusinessImage from "../../Assets/Portfolio/business.png";
import CalculatorImage from "../../Assets/Portfolio/calculator.png";
import TodoListImage from "../../Assets/Portfolio/todo-list.png";
import QRCodeImage from "../../Assets/Portfolio/QR Code Generator.png";
import AJ_InfoteckImage from "../../Assets/Portfolio/AJ_Infoteck.png";
import SwimmingImage from "../../Assets/Portfolio/swimming.png";
import ZraImage from "../../Assets/Portfolio/zra.png";
const Works = () => {
  return (
    <div>
      <div className="works-page">
        <div className="works-page-container">
          <h2>Works</h2>
          <div className="tabslist">
            <Tabs defaultValue="all">
              <Tabs.List justify="center">
                <Tabs.Tab value="all">All</Tabs.Tab>
                <Tabs.Tab value="css">CSS</Tabs.Tab>
                <Tabs.Tab value="Javascript">Javascript</Tabs.Tab>
                <Tabs.Tab value="React JS">React JS</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel className="tabs-all-panel" value="all">
                <div className="container-one">
                  <img className="one" src={WeboneyImage} alt="web-img" />
                  <img
                    className="one"
                    src={HeadphoneImage}
                    alt="headphone-img"
                  />
                  <img
                    className="one"
                    src={ECommeceImage}
                    alt="e-commerce-img"
                  />
                  <img className="one" src={BusinessImage} alt="business-img" />
                  <img
                    className="one"
                    src={CalculatorImage}
                    alt="calculator-img"
                  />
                  <img
                    className="one"
                    src={TodoListImage}
                    alt="todo-list-img"
                  />
                  <img className="one" src={QRCodeImage} alt="qrcode-img" />
                  <img
                    className="one"
                    src={AJ_InfoteckImage}
                    alt="aj-infoteck-img"
                  />
                  <img className="one" src={SwimmingImage} alt="swimming-img" />
                  <img className="one" src={ZraImage} alt="zra-img" />
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-css-panel" value="css">
                <div className="container-two">
                  <img className="two" src={WeboneyImage} alt="web-img" />
                  <img
                    className="two"
                    src={HeadphoneImage}
                    alt="headphone-img"
                  />
                  <img
                    className="two"
                    src={ECommeceImage}
                    alt="e-commerce-img"
                  />
                  <img className="two" src={BusinessImage} alt="business-img" />
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-javascript-panel" value="Javascript">
                <div className="container-three">
                  <img
                    className="three"
                    src={CalculatorImage}
                    alt="calculator-img"
                  />
                  <img
                    className="three"
                    src={TodoListImage}
                    alt="todo-list-img"
                  />
                </div>
              </Tabs.Panel>
              <Tabs.Panel className="tabs-react-panel" value="React JS">
                <div className="container-three">
                  <img className="four" src={QRCodeImage} alt="qrcode-img" />
                  <img
                    className="four"
                    src={AJ_InfoteckImage}
                    alt="aj-infoteck-img"
                  />
                  <img
                    className="four"
                    src={SwimmingImage}
                    alt="swimming-img"
                  />
                  <img className="four" src={ZraImage} alt="zra-img" />
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
