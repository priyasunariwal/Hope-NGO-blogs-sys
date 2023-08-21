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
export const Tag = React.forwardRef((props, ref) => {
    const { active, children, className, fill, icon, intent, interactive, large, minimal, multiline, onRemove, rightIcon, round, tabIndex = 0, htmlTitle, ...htmlProps } = props;
    const isRemovable = Utils.isFunction(onRemove);
    const tagClasses = classNames(Classes.TAG, Classes.intentClass(intent), {
        [Classes.ACTIVE]: active,
        [Classes.FILL]: fill,
        [Classes.INTERACTIVE]: interactive,
        [Classes.LARGE]: large,
        [Classes.MINIMAL]: minimal,
        [Classes.ROUND]: round,
    }, className);
    const isLarge = large || tagClasses.indexOf(Classes.LARGE) >= 0;
    const handleRemoveClick = (e) => {
        props.onRemove?.(e, props);
    };
    const removeButton = isRemovable ? (React.createElement("button", { "aria-label": "Remove tag", type: "button", className: Classes.TAG_REMOVE, onClick: handleRemoveClick, tabIndex: tabIndex },
        React.createElement(SmallCross, { size: isLarge ? IconSize.LARGE : IconSize.STANDARD }))) : null;
    return (React.createElement("span", { ...htmlProps, className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: ref },
        React.createElement(Icon, { icon: icon }),
        !isReactNodeEmpty(children) && (React.createElement(Text, { className: Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
        React.createElement(Icon, { icon: rightIcon }),
        removeButton));
});
Tag.displayName = `${DISPLAYNAME_PREFIX}.Tag`;
//# sourceMappingURL=tag.js.map