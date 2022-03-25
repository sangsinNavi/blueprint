import React from 'react';
import './menuExample.css';

import { Button} from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";
import ToggleContainer from './ToggleContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { type } from 'os';

function Toggle() {
    const tog = useSelector((state:RootState)=>state.toggle);
    return <>{tog}</>
}

export class MenuExample extends React.PureComponent<IExampleProps> {
    render_tog(){
        return <Toggle />
    }
    render() {
        const getTog:any = this.render_tog();
        const tog = getTog["_store"]["validated"];
        console.log(tog);
        return (
            <Example
                className="bp4-dark"
            >
                {/* <div id="button">
                    <ToggleContainer/>
                </div>
                <div id="menu">
                    <button onClick={()=>{console.log(tog)}}/>
                </div> */}
            </Example>
        );
    }
}