import { configure } from '@storybook/react';

function loadStories() {
  require('../src/index.js');
  require('../src/Example.js');

}

configure(loadStories, module);
