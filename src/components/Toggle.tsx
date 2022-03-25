import React from 'react';
import { Button} from "@blueprintjs/core";
import { Example } from '@blueprintjs/docs-theme';
type ToggleProps = {
    tog: boolean;
    onToggle: () => void;
  }
  
  function Toggle({
    tog,
    onToggle,
  }: ToggleProps) {
    return( 
      <Example
          className="bp4-dark"
      >
        <div id="menu" style={tog===true ? {width:"400px", border:"1px solid white"} : {width:"0px"}}>

        </div>
        <div id="button">
          <Button 
            onClick={onToggle} 
            id='arrow-button'  
            className="bp4-dark" 
            icon={tog===true ? "arrow-left" : "arrow-right"}
            style={{left:"100px"}}
          />
        </div>
      </Example>
    );
  }
  
  export default Toggle;