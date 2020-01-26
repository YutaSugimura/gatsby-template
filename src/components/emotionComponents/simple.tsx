import React, { ReactNode } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const style = css`
  color: hotpink;
`;

interface Props {
  children: ReactNode;
}

const SomeComponent: React.FC<Props> = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => <div css={anotherStyle}>Some text</div>;

const SimpleComponent = () => {
  return (
    <SomeComponent>
      <AnotherComponent />
    </SomeComponent>
  );
};
export default SimpleComponent;
