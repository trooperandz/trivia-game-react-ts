import styled from 'styled-components';

import avatar from 'images/avatar.png';

export const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 72px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #4aa;
`;

export const Avatar = styled.div`
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 40px;
  height: 40px;
`;
