declare function componentSelector<T extends string, K>(components: Record<string, any>): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<K & {
    variation?: T;
    ref?: any;
    locked?: boolean;
}> & import("react").RefAttributes<any>>;
export { componentSelector };
