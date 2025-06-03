import React, { Component } from "react";
import { ArrowProps, PrevArrowProps } from "@/utils/type";
// Arrows.tsx

export const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        right: 0,
        zIndex: 10,
        background: "black",
      }}
    />
  );
};

export const PrevArrow: React.FC<PrevArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        left: 0,
        zIndex: 10,
        background: "black",
      }}
    />
  );
};
