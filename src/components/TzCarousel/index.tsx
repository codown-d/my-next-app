"use client";
import { Avatar, Card, Carousel, CarouselProps, Image } from "antd";
import React from "react";
import Meta from "antd/es/card/Meta";
import { generateRandomColor, getColorScale } from "@/lib";
interface TzCarouselProps extends CarouselProps {
}
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export default function (props: TzCarouselProps) {
  return (
    <Carousel >
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
