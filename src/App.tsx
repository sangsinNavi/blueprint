import React from 'react';
import './App.css';
import {NavbarExample} from './components/NavbarExample'
import ToggleContainer from './components/ToggleContainer';
import { TabsExample } from './components/tabExample';

function App(): JSX.Element {
  return (
    <div id="body">
      <NavbarExample/>
      <ToggleContainer />
      <TabsExample />
    </div>
  );
}

export default App;