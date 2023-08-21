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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { IconSize, SmallCross } from "@blueprintjs/icons";
import { Classes, DISPLAYNAME_PREFIX, Utils } from "../../common";
import { isReactNodeEmpty } from "../../common/utils";
import { Icon } from "../icon/icon";
import { Text } from "../text/text";
/**
 * Tag component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tag
 */
export var Tag = React.forwardRef(function (props, ref) {
    var _a;
    var active = props.active, children = props.children, className = props.className, fill = props.fill, icon = props.icon, intent = props.intent, interactive = props.interactive, large = props.large, minimal = props.minimal, multiline = props.multiline, onRemove = props.onRemove, rightIcon = props.rightIcon, round = props.round, _b = props.tabIndex, tabIndex = _b === void 0 ? 0 : _b, htmlTitle = props.htmlTitle, htmlProps = __rest(props, ["active", "children", "className", "fill", "icon", "intent", "interactive", "large", "minimal", "multiline", "onRemove", "rightIcon", "round", "tabIndex", "htmlTitle"]);
    var isRemovable = Utils.isFunction(onRemove);
    var tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), (_a = {},
        _a[Classes.ACTIVE] = active,
        _a[Classes.FILL] = fill,
        _a[Classes.INTERACTIVE] = interactive,
        _a[Classes.LARGE] = large,
        _a[Classes.MINIMAL] = minimal,
        _a[Classes.ROUND] = round,
        _a), className);
    var isLarge = large || tagClasses.indexOf(Classes.LARGE) >= 0;
    var handleRemoveClick = function (e) {
        var _a;
        (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, e, props);
    };
    var removeButton = isRemovable ? (React.createElement("button", { "aria-label": "Remove tag", type: "button", className: Classes.TAG_REMOVE, onClick: handleRemoveClick, tabIndex: tabIndex },
        React.createElement(SmallCross, { size: isLarge ? IconSize.LARGE : IconSize.STANDARD }))) : null;
    return (React.createElement("span", __assign({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: ref }),
        React.createElement(Icon, { icon: icon }),
        !isReactNodeEmpty(children) && (React.createElement(Text, { className: Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
        React.createElement(Icon, { icon: rightIcon }),
        removeButton));
});
Tag.displayName = "".concat(DISPLAYNAME_PREFIX, ".Tag");
//# sourceMappingURL=tag.js.map