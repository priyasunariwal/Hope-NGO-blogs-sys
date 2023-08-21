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
import { __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes } from "../../common";
/**
 * Dialog footer component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialog-footer-props
 */
var DialogFooter = /** @class */ (function (_super) {
    __extends(DialogFooter, _super);
    function DialogFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogFooter.prototype.render = function () {
        var _a;
        return (React.createElement("div", { className: classNames(Classes.DIALOG_FOOTER, this.props.className, (_a = {},
                _a[Classes.DIALOG_FOOTER_FIXED] = !this.props.minimal,
                _a)) },
            this.renderMainSection(),
            this.maybeRenderActionsSection()));
    };
    /** Render the main footer section (left aligned). */
    DialogFooter.prototype.renderMainSection = function () {
        return React.createElement("div", { className: Classes.DIALOG_FOOTER_MAIN_SECTION }, this.props.children);
    };
    /** Optionally render the footer actions (right aligned). */
    DialogFooter.prototype.maybeRenderActionsSection = function () {
        var actions = this.props.actions;
        if (actions == null) {
            return undefined;
        }
        return React.createElement("div", { className: Classes.DIALOG_FOOTER_ACTIONS }, actions);
    };
    DialogFooter.defaultProps = {
        minimal: false,
    };
    return DialogFooter;
}(AbstractPureComponent));
export { DialogFooter };
//# sourceMappingURL=dialogFooter.js.map