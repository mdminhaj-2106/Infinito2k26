import React from "react";
import "./content.css";
import Card from "./Card.jsx";
import image1 from "./sparx.png";
import image2 from "./bsrdc.png";
import hero from "./herocycles.png";

import amalfa from "./amalfa.png";
import bank from "./bank.png";
import bizzareindia from "./bizzareindia.png";
import community from "./community.png";
import cubelelo from "./cubelelo.png";

import eventim from "./eventim.png";
import knowafest from "./knowafest.png";
import lassiking from "./lassiking.png";
import ncc from "./ncc.png";

import patnabeats from "./patnabeats.png";

import royalenfield from "./royalenfield.png";
import ruban from "./ruban.png";
import unstop from "./unstop.png";

import varta from "./varta.png";
import wowchina from "./wowchina.png";
import zebronics from "./zebronics.png";

const content = () => {
  return (
    <div id="all" className="contentdiv svelte-1suma1w">
      <Card top="Powered By" img={image1} bottom="SPARX" />
      <Card top="Powered By" img={image2} bottom="B S R D C" />
      <Card top="Powered By" img={hero} bottom="HERO CYCLES" />
      <Card top="Powered By" img={amalfa} bottom="HOTEL AMALFA" />
      <Card top="Powered By" img={bank} bottom="CENTRAL BANK OF INDIA" />
      <Card top="Powered By" img={bizzareindia} bottom="BIZZARE INDIA" />
      <Card top="Powered By" img={community} bottom="ALL COMMUNITY EVENTS" />
      <Card top="Powered By" img={cubelelo} bottom="cubelelo" />
      <Card top="Powered By" img={eventim} bottom="EVENTIM" />
      <Card top="Powered By" img={knowafest} bottom="KNOWAFEST" />
      <Card top="Powered By" img={lassiking} bottom="LASSI KING" />
      <Card top="Powered By" img={ncc} bottom="NCC" />
      {/* <Card top="Powered By" img={patnabeats} bottom="PATNA BEATS" /> */}
      <Card top="Powered By" img={royalenfield} bottom="ROYAL ENFIELD" />
      <Card top="Powered By" img={ruban} bottom="RUBAN" />
      <Card top="Powered By" img={unstop} bottom="UNSTOP" />
      <Card top="Powered By" img={varta} bottom="VARTA" />
      <Card top="Powered By" img={wowchina} bottom="WOW!  CHINA" />
      <Card top="Powered By" img={zebronics} bottom="ZEBRONICS" />
    </div>
  );
};

export default content;
