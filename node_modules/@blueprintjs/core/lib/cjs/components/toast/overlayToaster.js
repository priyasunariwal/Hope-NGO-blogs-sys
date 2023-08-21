"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
exports.OverlayToaster = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var common_1 = require("../../common");
var errors_1 = require("../../common/errors");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var overlay_1 = require("../overlay/overlay");
var toast_1 = require("./toast");
/**
 * OverlayToaster component.
 *
 * @see https://blueprintjs.com/docs/#core/components/toast
 */
var OverlayToaster = /** @class */ (function (_super) {
    tslib_1.__extends(OverlayToaster, _super);
    function OverlayToaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        _this.toastId = 0;
        _this.renderToast = function (toast) {
            return React.createElement(toast_1.Toast, tslib_1.__assign({}, toast, { onDismiss: _this.getDismissHandler(toast) }));
        };
        _this.getDismissHandler = function (toast) { return function (timeoutExpired) {
            _this.dismiss(toast.key, timeoutExpired);
        }; };
        _this.handleClose = function (e) {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            if (e.key === "Escape") {
                _this.clear();
            }
        };
        return _this;
    }
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    OverlayToaster.create = function (props, container) {
        if (container === void 0) { container = document.body; }
        if (props != null && props.usePortal != null && !(0, utils_1.isNodeEnv)("production")) {
            console.warn(errors_1.TOASTER_WARN_INLINE);
        }
        var containerElement = document.createElement("div");
        container.appendChild(containerElement);
        var toaster = ReactDOM.render(React.createElement(OverlayToaster, tslib_1.__assign({}, props, { usePortal: false })), containerElement);
        if (toaster == null) {
            throw new Error(errors_1.TOASTER_CREATE_NULL);
        }
        return toaster;
    };
    OverlayToaster.prototype.show = function (props, key) {
        if (this.props.maxToasts) {
            // check if active number of toasts are at the maxToasts limit
            this.dismissIfAtLimit();
        }
        var options = this.createToastOptions(props, key);
        if (key === undefined || this.isNewToastKey(key)) {
            this.setState(function (prevState) { return ({
                toasts: tslib_1.__spreadArray([options], prevState.toasts, true),
            }); });
        }
        else {
            this.setState(function (prevState) { return ({
                toasts: prevState.toasts.map(function (t) { return (t.key === key ? options : t); }),
            }); });
        }
        return options.key;
    };
    OverlayToaster.prototype.dismiss = function (key, timeoutExpired) {
        if (timeoutExpired === void 0) { timeoutExpired = false; }
        this.setState(function (_a) {
            var toasts = _a.toasts;
            return ({
                toasts: toasts.filter(function (t) {
                    var _a;
                    var matchesKey = t.key === key;
                    if (matchesKey) {
                        (_a = t.onDismiss) === null || _a === void 0 ? void 0 : _a.call(t, timeoutExpired);
                    }
                    return !matchesKey;
                }),
            });
        });
    };
    OverlayToaster.prototype.clear = function () {
        this.state.toasts.forEach(function (t) { var _a; return (_a = t.onDismiss) === null || _a === void 0 ? void 0 : _a.call(t, false); });
        this.setState({ toasts: [] });
    };
    OverlayToaster.prototype.getToasts = function () {
        return this.state.toasts;
    };
    OverlayToaster.prototype.render = function () {
        var classes = (0, classnames_1.default)(common_1.Classes.TOAST_CONTAINER, this.getPositionClasses(), this.props.className);
        return (React.createElement(overlay_1.Overlay, { autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, isOpen: this.state.toasts.length > 0 || this.props.children != null, onClose: this.handleClose, shouldReturnFocusOnClose: false, 
            // $pt-transition-duration * 3 + $pt-transition-duration / 2
            transitionDuration: 350, transitionName: common_1.Classes.TOAST, usePortal: this.props.usePortal },
            this.state.toasts.map(this.renderToast, this),
            this.props.children));
    };
    OverlayToaster.prototype.validateProps = function (_a) {
        var maxToasts = _a.maxToasts;
        // maximum number of toasts should not be a number less than 1
        if (maxToasts !== undefined && maxToasts < 1) {
            throw new Error(errors_1.TOASTER_MAX_TOASTS_INVALID);
        }
    };
    OverlayToaster.prototype.isNewToastKey = function (key) {
        return this.state.toasts.every(function (toast) { return toast.key !== key; });
    };
    OverlayToaster.prototype.dismissIfAtLimit = function () {
        if (this.state.toasts.length === this.props.maxToasts) {
            // dismiss the oldest toast to stay within the maxToasts limit
            this.dismiss(this.state.toasts[this.state.toasts.length - 1].key);
        }
    };
    OverlayToaster.prototype.createToastOptions = function (props, key) {
        if (key === void 0) { key = "toast-".concat(this.toastId++); }
        // clone the object before adding the key prop to avoid leaking the mutation
        return tslib_1.__assign(tslib_1.__assign({}, props), { key: key });
    };
    OverlayToaster.prototype.getPositionClasses = function () {
        var positions = this.props.position.split("-");
        // NOTE that there is no -center class because that's the default style
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], positions.map(function (p) { return "".concat(common_1.Classes.TOAST_CONTAINER, "-").concat(p.toLowerCase()); }), true), [
            "".concat(common_1.Classes.TOAST_CONTAINER, "-").concat(this.props.usePortal ? "in-portal" : "inline"),
        ], false);
    };
    OverlayToaster.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".OverlayToaster");
    OverlayToaster.defaultProps = {
        autoFocus: false,
        canEscapeKeyClear: true,
        position: common_1.Position.TOP,
        usePortal: true,
    };
    return OverlayToaster;
}(common_1.AbstractPureComponent));
exports.OverlayToaster = OverlayToaster;
//# sourceMappingURL=overlayToaster.js.map