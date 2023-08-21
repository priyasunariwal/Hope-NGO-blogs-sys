"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyComboTag = exports.DISPLAY_ALIASES = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var icon_1 = require("../icon/icon");
var hotkeyParser_1 = require("./hotkeyParser");
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
exports.DISPLAY_ALIASES = {
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
};
var KeyComboTag = /** @class */ (function (_super) {
    tslib_1.__extends(KeyComboTag, _super);
    function KeyComboTag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderKey = function (key, index) {
            var _a;
            var _b;
            var keyString = (_b = exports.DISPLAY_ALIASES[key]) !== null && _b !== void 0 ? _b : key;
            var icon = KEY_ICONS[key];
            var reactKey = "key-".concat(index);
            return (React.createElement("kbd", { className: (0, classnames_1.default)(common_1.Classes.KEY, (_a = {}, _a[common_1.Classes.MODIFIER_KEY] = icon != null, _a)), key: reactKey },
                icon != null && React.createElement(icon_1.Icon, { icon: icon.icon, title: icon.iconTitle }),
                keyString));
        };
        _this.renderMinimalKey = function (key, index) {
            var icon = KEY_ICONS[key];
            return icon == null ? key : React.createElement(icon_1.Icon, { icon: icon.icon, title: icon.iconTitle, key: "key-".concat(index) });
        };
        return _this;
    }
    KeyComboTag.prototype.render = function () {
        var _a = this.props, className = _a.className, combo = _a.combo, minimal = _a.minimal;
        var keys = (0, hotkeyParser_1.normalizeKeyCombo)(combo)
            .map(function (key) { return (key.length === 1 ? key.toUpperCase() : key); })
            .map(minimal ? this.renderMinimalKey : this.renderKey);
        return React.createElement("span", { className: (0, classnames_1.default)(common_1.Classes.KEY_COMBO, className) }, keys);
    };
    KeyComboTag.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".KeyComboTag");
    return KeyComboTag;
}(common_1.AbstractPureComponent));
exports.KeyComboTag = KeyComboTag;
//# sourceMappingURL=keyComboTag.js.map