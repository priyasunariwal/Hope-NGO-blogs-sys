/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { __assign, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Error, InfoSign, Tick, WarningSign } from "@blueprintjs/icons";
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX, Intent, Utils, } from "../../common";
import { H5 } from "../html/html";
import { Icon } from "../icon/icon";
/**
 * Callout component.
 *
 * @see https://blueprintjs.com/docs/#core/components/callout
 */
var Callout = /** @class */ (function (_super) {
    __extends(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, icon = _b.icon, intent = _b.intent, title = _b.title, htmlProps = __rest(_b, ["className", "children", "icon", "intent", "title"]);
        var iconElement = this.renderIcon(icon, intent);
        var classes = classNames(Classes.CALLOUT, Classes.intentClass(intent), className, (_a = {},
            _a[Classes.CALLOUT_HAS_BODY_CONTENT] = !Utils.isReactNodeEmpty(children),
            _a[Classes.CALLOUT_ICON] = iconElement != null,
            _a));
        return (React.createElement("div", __assign({ className: classes }, htmlProps),
            iconElement,
            title && React.createElement(H5, null, title),
            children));
    };
    Callout.prototype.renderIcon = function (icon, intent) {
        // 1. no icon
        if (icon === null || icon === false) {
            return undefined;
        }
        var iconProps = { "aria-hidden": true, tabIndex: -1 };
        // 2. icon specified by name or as a custom SVG element
        if (icon !== undefined) {
            return React.createElement(Icon, __assign({ icon: icon }, iconProps));
        }
        // 3. icon specified by intent prop
        switch (intent) {
            case Intent.DANGER:
                return React.createElement(Error, __assign({}, iconProps));
            case Intent.PRIMARY:
                return React.createElement(InfoSign, __assign({}, iconProps));
            case Intent.WARNING:
                return React.createElement(WarningSign, __assign({}, iconProps));
            case Intent.SUCCESS:
                return React.createElement(Tick, __assign({}, iconProps));
            default:
                return undefined;
        }
    };
    Callout.displayName = "".concat(DISPLAYNAME_PREFIX, ".Callout");
    return Callout;
}(AbstractPureComponent));
export { Callout };
//# sourceMappingURL=callout.js.map