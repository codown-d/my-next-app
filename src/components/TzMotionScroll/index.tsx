"use client";
import { scroll } from "framer-motion/dom"
export default function () {
  return (scroll(progress => console.log(progress)));
}