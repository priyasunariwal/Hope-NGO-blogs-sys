/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
 * Dialog body component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialog-body-props
 */
var DialogBody = /** @class */ (function (_super) {
    __extends(DialogBody, _super);
    function DialogBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogBody.prototype.render = function () {
        var _a;
        return (React.createElement("div", { className: classNames(Classes.DIALOG_BODY, this.props.className, (_a = {},
                _a[Classes.DIALOG_BODY_SCROLL_CONTAINER] = this.props.useOverflowScrollContainer,
                _a)) }, this.props.children));
    };
    DialogBody.defaultProps = {
        useOverflowScrollContainer: true,
    };
    return DialogBody;
}(AbstractPureComponent));
export { DialogBody };
//# sourceMappingURL=dialogBody.js.map