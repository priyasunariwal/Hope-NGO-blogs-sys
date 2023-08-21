/// <reference types="react" />
export declare function elementIsOrContains(element: HTMLElement, testElement: HTMLElement): boolean;
/**
 * Checks whether the given element is inside something that looks like a text input.
 * This is particularly useful to determine if a keyboard event inside this element should take priority over hotkey
 * bindings / keyboard shortcut handlers.
 *
 * @returns true if the element is inside a text input
 */
export declare function elementIsTextInput(elem: HTMLElement): boolean;
/**
 * Gets the active element in the document or shadow root (if an element is provided, and it's in the shadow DOM).
 */
export declare function getActiveElement(element?: HTMLElement | null, options?: GetRootNodeOptions): Element | null;
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
export declare function throttleEvent(target: EventTarget, eventName: string, newEventName: string): (event: Event) => void;
export interface ThrottledReactEventOptions {
    preventDefault?: boolean;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 *
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
export declare function throttleReactEventCallback<E extends React.SyntheticEvent = React.SyntheticEvent>(callback: (event: E, ...otherArgs: any[]) => any, options?: ThrottledReactEventOptions): (event2: E) => void;
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
export declare function throttle<T extends Function>(method: T): T;
export declare function clickElementOnKeyPress(keys: string[]): (e: React.KeyboardEvent) => boolean;
