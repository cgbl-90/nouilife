import React from "react";
import Card from "./Card";
import device from "./device.png";
import tech from "./tech.png";
import cust from "./cust.png";
import "./ServiceCard.css";

const Services = () => {
  return (
    <div className="flex-container">
      <Card
        icon={device}
        title="Our device"
        text="Noui is a discrete, easy-to-use, affordable wearable bladder scanner. It uses electromagnetic communication to send signals. An electrical impulse through the bladder, create an electrical field around the body, and then measure the change in capacitance values. This change allows Noui to detect any abnormal levels of urine in the bladder, and then alert the wearer or their carer."
      />
      <Card
        icon={tech}
        title="Our technology"
        text="We use a unique innovative method and it is built on a simple electronic construction and small size. The electrodes can be integrated into textile computing and printed electronics that ensures an extra comfort for patients."
      />
      <Card
        icon={cust}
        title="Our customers"
        text="Our customers are hospitals, elderly care and pharmaceutical companies and private people who want to continue an active daily life. The pharmaceutical companies can determine time for dosing and new drug effectiveness for specific groups of outpatients. Hospitals can demonstrate super quick treatment for risk patients as noui can detect abnormal post void urine residual instantly.ild a beautiful, modern website with flexible components and modular pages built from scratch."
      />
    </div>
  );
};

export default Services;
