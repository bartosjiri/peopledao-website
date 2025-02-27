import React, { useState } from "react";
import SVG from "react-inlinesvg";
import Fade from "react-reveal/Fade";

import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";

import * as heroStyle from "./Hero.module.scss";

import content from "../../../../content/index/hero.yml";
import socials from "../../../../configuration/socials.yml";


import EthereumIcon from "../../../../static/assets/icons/cryptocurrencies/ethereum.svg";
import CopyIcon from "../../../../static/assets/icons/general/copy.svg";



const HeroSection = () => {

  const [alertMsg, setAlertMsg] = useState("");


  const AlertBox = () => {
    if(alertMsg === "") {
      return <div></div>
    } else {
      return (
        <div className={heroStyle.alert}>
          <h3>{alertMsg}</h3>
          <a className={heroStyle.close} onClick={close}>&times;</a>
        </div>
      );
    }
  }

  function close() {
    setAlertMsg("");
  }

  const handleCopy = () => {
    navigator?.clipboard?.writeText(content.contractAddress);
    setAlertMsg("Address copied!")
  };

  return (
    <Section name="hero" className={heroStyle.hero}>
      <AlertBox />
      <div className={heroStyle.wrapper}>
        <Fade distance="25%">
          <div className={heroStyle.content}>
            <h1>
              People<strong>DAO</strong>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: content.title }} />
            <div className={heroStyle.actions}>
              <Button
                className={heroStyle.button}
                href={socials.discordUrl}
                target="_blank"
              >
                <span>Join Discord</span>
              </Button>
              <div className={heroStyle.contract}>
                <div className={heroStyle.network}>
                  <SVG src={EthereumIcon} />
                  <span>ETH</span>
                </div>
                <div className={heroStyle.address} onClick={() => handleCopy()}>
                  <span>{content.contractAddress}</span>
                </div>
                <div className={heroStyle.copy} onClick={() => handleCopy()}>
                  <SVG src={CopyIcon} />
                </div>
                {/* @TODO: Add "click to copy" and "copied" tooltip */}
              </div>
            </div>
          </div>
        </Fade>
        <div className={heroStyle.image}>
          <div className={heroStyle.overlay}>
            <Fade right distance="25%">
              <img
                src="/assets/images/people-of-color.svg"
                alt="People drawing"
              />
            </Fade>
          </div>
          <img
            className={heroStyle.placeholder}
            src="/assets/images/people-of-color.svg"
            alt="People drawing"
          />
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
