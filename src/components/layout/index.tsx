import React from 'react';

import { Container, Wrapper } from './styles';
import Main from '../Main';

const layout: React.FC = () => {
  return (
      <container>
          <Wapper>
              <MenuBar />
              <Main />
              <SideBar />
          </Wapper>
      </container>

  );
}

export default layout;