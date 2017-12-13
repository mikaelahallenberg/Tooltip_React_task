
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './Tooltip';
import Example from './Example';


storiesOf('Tooltip task', module)
  .add('example', () => (
    <div>
      <Example />
    </div>
  ));
