/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { css } from '@emotion/core';

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
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
