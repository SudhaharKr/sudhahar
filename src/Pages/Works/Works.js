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
                  <img className="one" src={WeboneyImage} />
                  <img className="one" src={HeadphoneImage} />
                  <img className="one" src={ECommeceImage} />
                  <img className="one" src={BusinessImage} />
                  <img className="one" src={CalculatorImage} />
                  <img className="one" src={TodoListImage} />
                  <img className="one" src={QRCodeImage} />
                  <img className="one" src={AJ_InfoteckImage} />
                  <img className="one" src={SwimmingImage} />
                  <img className="one" src={ZraImage} />
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-css-panel" value="css">
                <div className="container-two">
                  <img className="two" src={WeboneyImage} />
                  <img className="two" src={HeadphoneImage} />
                  <img className="two" src={ECommeceImage} />
                  <img className="two" src={BusinessImage} />
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-javascript-panel" value="Javascript">
                <div className="container-three">
                  <img className="three" src={CalculatorImage} />
                  <img className="three" src={TodoListImage} />
                </div>
              </Tabs.Panel>
              <Tabs.Panel className="tabs-react-panel" value="React JS">
                <div className="container-three">
                  <img className="four" src={QRCodeImage} />
                  <img className="four" src={AJ_InfoteckImage} />
                  <img className="four" src={SwimmingImage} />
                  <img className="four" src={ZraImage} />
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
