/// <reference types="react" />
/**
 * Returns whether the keyboard event was triggered by Enter or Space, the two keys that are expected to trigger
 * interactive elements like buttons.
 */
export declare function isKeyboardClick(event: React.KeyboardEvent<HTMLElement>): boolean;
export declare function isArrowKey(event: React.KeyboardEvent<HTMLElement>): boolean;
