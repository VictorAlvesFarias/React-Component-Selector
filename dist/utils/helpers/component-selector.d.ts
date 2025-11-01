declare function componentSelector<T extends string, K>(components: Record<string, any>, ommitedKeys?: (keyof (K & {
    variation?: T;
    ref?: any;
    locked?: boolean;
}))[]): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Omit<K & {
    variation?: T;
    ref?: any;
    locked?: boolean;
}, never>> & import("react").RefAttributes<any>>;
export { componentSelector };
