import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toggle } from '../modules/toggle';
import Toggle from './Toggle';
import './ToggleContainer.css';

function ToggleContainer () {
  const tog = useSelector((state: RootState) => state.toggle.tog);
  const dispatch = useDispatch(); 

  const onToggle = () => {
    dispatch(toggle());
  };

  return ( <Toggle tog={tog} onToggle={onToggle} /> );
};

export default ToggleContainer;