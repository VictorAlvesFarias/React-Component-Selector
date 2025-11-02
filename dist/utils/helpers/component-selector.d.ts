declare function componentSelector<T extends string, K, H extends keyof K = never>(components: Record<string, any>): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<Omit<K, H> & {
    variation?: T;
    ref?: any;
    locked?: boolean;
}> & import("react").RefAttributes<any>>;
export { componentSelector };
