import * as React from "react";
import type { IconName } from "./iconNames";
import type { SVGIconProps } from "./svgIconProps";
export type SVGIconContainerProps<T extends Element> = Omit<SVGIconProps<T>, "children"> & {
    /**
     * Icon name.
     */
    iconName: IconName;
    /**
     * Icon contents, loaded via `IconLoader` and specified as `<path>` elements.
     */
    children: JSX.Element | JSX.Element[];
};
/**
 * Generic icon container component type. This is essentially a type hack required to make forwardRef work with generic
 * components. Note that this slows down TypeScript compilation, but it better than the alternative of globally
 * augmenting "@types/react".
 *
 * @see https://stackoverflow.com/a/73795494/7406866
 */
export interface SVGIconContainerComponent extends React.FC<SVGIconContainerProps<Element>> {
    <T extends Element = Element>(props: SVGIconContainerProps<T>): React.ReactElement | null;
}
export declare const SVGIconContainer: SVGIconContainerComponent;
