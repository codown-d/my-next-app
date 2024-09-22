import React, { useMemo } from 'react';
import { Affix, AffixProps, } from 'antd';

export interface TzAffixProps extends AffixProps {
}
export const TzAffix = (props: TzAffixProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className:props.className,
    };
  }, [props]);
  return <Affix {...realProps}>{props.children}</Affix>;
};
