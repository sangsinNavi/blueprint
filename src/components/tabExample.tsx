import * as React from "react";

import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";

export interface ITabsExampleState {
    activePanelOnly: boolean;
    animate: boolean;
    navbarTabId: TabId;
    vertical: boolean;
}

export function TabsExample() {
    return (
        <div style={{width:"600px", height:"400px", backgroundColor:"white", position:"fixed", left:"500px", top:"200px"}}>
            <Example className="docs-tabs-example">
                <Tabs
                    animate={true}
                    id="TabsExample"
                    key={"vertical"}
                    renderActiveTabPanelOnly={false}
                    vertical={false}
                >
                    <Tab id="rx" title="React" panel={<ReactPanel />} />
                    <Tab id="ng" title="Angular" panel={<AngularPanel />} />
                    <Tab id="mb" title="Ember" panel={<EmberPanel />} panelClassName="ember-panel" />
                    <Tab id="bb" disabled={true} title="Backbone" panel={<BackbonePanel />} />
                    <Tabs.Expander />
                    <InputGroup className={Classes.FILL} type="text" placeholder="Search..." />
                </Tabs>
            </Example>
        </div>
    );
}

const ReactPanel: React.FunctionComponent = () => (
    <div>
        <H3>Example panel: React</H3>
        <p className={Classes.RUNNING_TEXT}>
            Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
            stack, it's easy to try it out on a small feature in an existing project.
        </p>
    </div>
);

const AngularPanel: React.FunctionComponent = () => (
    <div>
        <H3>Example panel: Angular</H3>
        <p className={Classes.RUNNING_TEXT}>
            HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
            views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
            environment is extraordinarily expressive, readable, and quick to develop.
        </p>
    </div>
);

const EmberPanel: React.FunctionComponent = () => (
    <div>
        <H3>Example panel: Ember</H3>
        <p className={Classes.RUNNING_TEXT}>
            Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
            pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
            and best practices into the framework. What is your favorite JS framework?
        </p>
        <input className={Classes.INPUT} type="text" />
    </div>
);

const BackbonePanel: React.FunctionComponent = () => (
    <div>
        <H3>Backbone</H3>
    </div>
);