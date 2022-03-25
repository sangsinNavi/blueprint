import React from 'react';
import './App.css';
import {NavbarExample} from './components/NavbarExample'
import ToggleContainer from './components/ToggleContainer';
import { PanelStack2Example } from './components/panelStackExample';

function App(): JSX.Element {
  return (
    <div id="body">
      {/* <NavbarExample id="a"/>
      <ToggleContainer /> */}
      <PanelStack2Example id="a" />
    </div>
  );
}

export default App;