"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callout = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var common_1 = require("../../common");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
/**
 * Callout component.
 *
 * @see https://blueprintjs.com/docs/#core/components/callout
 */
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, children = _b.children, icon = _b.icon, intent = _b.intent, title = _b.title, htmlProps = tslib_1.__rest(_b, ["className", "children", "icon", "intent", "title"]);
        var iconElement = this.renderIcon(icon, intent);
        var classes = (0, classnames_1.default)(common_1.Classes.CALLOUT, common_1.Classes.intentClass(intent), className, (_a = {},
            _a[common_1.Classes.CALLOUT_HAS_BODY_CONTENT] = !common_1.Utils.isReactNodeEmpty(children),
            _a[common_1.Classes.CALLOUT_ICON] = iconElement != null,
            _a));
        return (React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps),
            iconElement,
            title && React.createElement(html_1.H5, null, title),
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
            return React.createElement(icon_1.Icon, tslib_1.__assign({ icon: icon }, iconProps));
        }
        // 3. icon specified by intent prop
        switch (intent) {
            case common_1.Intent.DANGER:
                return React.createElement(icons_1.Error, tslib_1.__assign({}, iconProps));
            case common_1.Intent.PRIMARY:
                return React.createElement(icons_1.InfoSign, tslib_1.__assign({}, iconProps));
            case common_1.Intent.WARNING:
                return React.createElement(icons_1.WarningSign, tslib_1.__assign({}, iconProps));
            case common_1.Intent.SUCCESS:
                return React.createElement(icons_1.Tick, tslib_1.__assign({}, iconProps));
            default:
                return undefined;
        }
    };
    Callout.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".Callout");
    return Callout;
}(common_1.AbstractPureComponent));
exports.Callout = Callout;
//# sourceMappingURL=callout.js.map