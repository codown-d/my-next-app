import React, { useMemo } from 'react';
import './index.scss';
import { Button, ButtonProps } from 'antd';

interface TzButtonProps extends ButtonProps {
}
export const TzButton = (props: TzButtonProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className:`tz-button ${props.className}`,
    };
  }, [props]);
  return <Button {...realProps} />;
};
