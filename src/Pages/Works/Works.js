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
                  <img className="one" src={WeboneyImage}  alt="image"/>
                  <img className="one" src={HeadphoneImage} alt="img"/>
                  <img className="one" src={ECommeceImage} alt="img"/>
                  <img className="one" src={BusinessImage} alt="img"/>
                  <img className="one" src={CalculatorImage} alt="img"/>
                  <img className="one" src={TodoListImage} alt="img"/>
                  <img className="one" src={QRCodeImage} alt="img"/>
                  <img className="one" src={AJ_InfoteckImage} alt="img"/>
                  <img className="one" src={SwimmingImage} alt="img"/>
                  <img className="one" src={ZraImage} alt="img"/>
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-css-panel" value="css">
                <div className="container-two">
                  <img className="two" src={WeboneyImage} alt="img"/>
                  <img className="two" src={HeadphoneImage} alt="img"/>
                  <img className="two" src={ECommeceImage} alt="img"/>
                  <img className="two" src={BusinessImage} alt="img"/>
                </div>
              </Tabs.Panel>

              <Tabs.Panel className="tabs-javascript-panel" value="Javascript">
                <div className="container-three">
                  <img className="three" src={CalculatorImage} alt="img"/>
                  <img className="three" src={TodoListImage} alt="img"/>
                </div>
              </Tabs.Panel>
              <Tabs.Panel className="tabs-react-panel" value="React JS">
                <div className="container-three">
                  <img className="four" src={QRCodeImage} alt="img"/>
                  <img className="four" src={AJ_InfoteckImage} alt="img"/>
                  <img className="four" src={SwimmingImage} alt="img"/>
                  <img className="four" src={ZraImage} alt="img"/>
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
