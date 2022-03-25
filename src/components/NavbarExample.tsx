import * as React from "react";

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import { IExampleProps,Example } from "@blueprintjs/docs-theme";

export interface INavbarExampleState {
  alignRight: boolean;
}

export class NavbarExample extends React.PureComponent<
  IExampleProps,
  INavbarExampleState
> {

  public render() {
    return (
      <Example
        className="bp4-navbar bp4-dark"
      >
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Blueprint</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
            <Button className={Classes.MINIMAL} icon="document" text="Files" />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="user"/>
            <Button className={Classes.MINIMAL} icon="notifications"/>
            <Button className={Classes.MINIMAL} icon="cog"/>
          </NavbarGroup>
        </Navbar>
      </Example>
    );
  }
}
