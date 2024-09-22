"use client";
import React, { useMemo, useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, MenuProps } from 'antd';
import { getChildrenToRender } from '@/lib/utils';

const { Item, SubMenu } = Menu;

interface HeaderNavProps {
  dataSource: {
    Menu: {children:MenuProps[]}
  };
  isMobile: boolean;
}
interface Menu {

}

function HeaderNav(props: HeaderNavProps) {

  const { dataSource, isMobile, ...otherProps } = props;
  let [phoneOpen, setPhoneOpen] = useState(false)

  let navChildren = useMemo(() => {
    let navData = dataSource.Menu.children;
    return navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header3-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header3-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header3-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    })
  }, [dataSource])
  let moment = useMemo(() => {
    return phoneOpen === undefined ? 300 : null;
  }, [phoneOpen])

  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...dataSource.wrapper}
      {...props}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <img width="100%" src={dataSource.logo.children} alt="img" />
        </TweenOne>
        {isMobile && (
          <div
            {...dataSource.mobileMenu}
            onClick={() => {
              setPhoneOpen(pre => !pre)
            }}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        <TweenOne
          {...dataSource.Menu}
          animation={
            isMobile
              ? {
                x: 0,
                height: 0,
                duration: 300,
                onComplete: (e: any) => {
                  if (phoneOpen) {
                    e.target.style.height = 'auto';
                  }
                },
                ease: 'easeInOutQuad',
              }
              : null
          }
          moment={moment}
          reverse={!!phoneOpen}
        >
          <Menu
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={['sub0']}
            theme="light"
          >
            {navChildren}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  );
}

export default HeaderNav;
