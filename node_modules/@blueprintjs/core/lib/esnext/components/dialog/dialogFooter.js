/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes } from "../../common";
/**
 * Dialog footer component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialog-footer-props
 */
export class DialogFooter extends AbstractPureComponent {
    static defaultProps = {
        minimal: false,
    };
    render() {
        return (React.createElement("div", { className: classNames(Classes.DIALOG_FOOTER, this.props.className, {
                [Classes.DIALOG_FOOTER_FIXED]: !this.props.minimal,
            }) },
            this.renderMainSection(),
            this.maybeRenderActionsSection()));
    }
    /** Render the main footer section (left aligned). */
    renderMainSection() {
        return React.createElement("div", { className: Classes.DIALOG_FOOTER_MAIN_SECTION }, this.props.children);
    }
    /** Optionally render the footer actions (right aligned). */
    maybeRenderActionsSection() {
        const { actions } = this.props;
        if (actions == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.DIALOG_FOOTER_ACTIONS }, actions);
    }
}
//# sourceMappingURL=dialogFooter.js.map