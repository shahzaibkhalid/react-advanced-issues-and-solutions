import React from 'react';
import { Appear } from 'mdx-deck';

const AppearList = ({list}) => (
  <div style={{ textAlign: 'left', fontSize: 50}}>
    <ul>
      <Appear>
        {list.map(item => <li key={item}>{item}</li>)}
      </Appear>
    </ul>
  </div>
);

export default AppearList;
