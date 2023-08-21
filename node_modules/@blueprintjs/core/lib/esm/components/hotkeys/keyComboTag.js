/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX } from "../../common";
import { Icon } from "../icon/icon";
import { normalizeKeyCombo } from "./hotkeyParser";
var KEY_ICONS = {
    ArrowDown: { icon: "arrow-down", iconTitle: "Down key" },
    ArrowLeft: { icon: "arrow-left", iconTitle: "Left key" },
    ArrowRight: { icon: "arrow-right", iconTitle: "Right key" },
    ArrowUp: { icon: "arrow-up", iconTitle: "Up key" },
    alt: { icon: "key-option", iconTitle: "Alt/Option key" },
    cmd: { icon: "key-command", iconTitle: "Command key" },
    ctrl: { icon: "key-control", iconTitle: "Control key" },
    delete: { icon: "key-delete", iconTitle: "Delete key" },
    enter: { icon: "key-enter", iconTitle: "Enter key" },
    meta: { icon: "key-command", iconTitle: "Command key" },
    shift: { icon: "key-shift", iconTitle: "Shift key" },
};
/** Reverse table of some CONFIG_ALIASES fields, for display by KeyComboTag */
export var DISPLAY_ALIASES = {
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
};
var KeyComboTag = /** @class */ (function (_super) {
    __extends(KeyComboTag, _super);
    function KeyComboTag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderKey = function (key, index) {
            var _a;
            var _b;
            var keyString = (_b = DISPLAY_ALIASES[key]) !== null && _b !== void 0 ? _b : key;
            var icon = KEY_ICONS[key];
            var reactKey = "key-".concat(index);
            return (React.createElement("kbd", { className: classNames(Classes.KEY, (_a = {}, _a[Classes.MODIFIER_KEY] = icon != null, _a)), key: reactKey },
                icon != null && React.createElement(Icon, { icon: icon.icon, title: icon.iconTitle }),
                keyString));
        };
        _this.renderMinimalKey = function (key, index) {
            var icon = KEY_ICONS[key];
            return icon == null ? key : React.createElement(Icon, { icon: icon.icon, title: icon.iconTitle, key: "key-".concat(index) });
        };
        return _this;
    }
    KeyComboTag.prototype.render = function () {
        var _a = this.props, className = _a.className, combo = _a.combo, minimal = _a.minimal;
        var keys = normalizeKeyCombo(combo)
            .map(function (key) { return (key.length === 1 ? key.toUpperCase() : key); })
            .map(minimal ? this.renderMinimalKey : this.renderKey);
        return React.createElement("span", { className: classNames(Classes.KEY_COMBO, className) }, keys);
    };
    KeyComboTag.displayName = "".concat(DISPLAYNAME_PREFIX, ".KeyComboTag");
    return KeyComboTag;
}(AbstractPureComponent));
export { KeyComboTag };
//# sourceMappingURL=keyComboTag.js.map