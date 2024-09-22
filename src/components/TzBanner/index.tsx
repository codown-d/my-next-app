"use client";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from "./index.module.css";
const BgElement = Element.BgElement;
export default function TzBanner() {
  return (
    <BannerAnim className={`${styles['banner-user']}`}>
      <Element
        className={`${styles['banner-user-elem']}`}
        key="0"
      >
        <BgElement
          key="bg"
          className={`${styles['banner-bg']}`}
          style={{
            background: '#364D79',
          }}
        />
        <TweenOne
          className={`${styles['banner-user-title']}`} animation={{ y: 30, opacity: 0, type: 'from' }}>
          Ant Motion Banner
        </TweenOne>
        <TweenOne
          className={`${styles['banner-user-text']}`}
          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
        >
          The Fast Way Use Animation In React
        </TweenOne>
      </Element>
      <Element
        prefixCls="banner-user-elem"
        key="1"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: '#64CBCC',
          }}
        />
        <TweenOne className={`${styles['banner-user-title']}`} animation={{ y: 30, opacity: 0, type: 'from' }}>
          Ant Motion Banner
        </TweenOne>
        <TweenOne className={`${styles['banner-user-text']}`}
          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
        >
          The Fast Way Use Animation In React
        </TweenOne>
      </Element>
    </BannerAnim>);
}