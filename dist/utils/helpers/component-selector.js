import { forwardRef } from 'react';
function componentSelector(components, ommitedKeys) {
    if (!(components === null || components === void 0 ? void 0 : components.default)) {
        throw new Error(`No default component defined in components.`);
    }
    const componentWrapper = forwardRef((props, ref) => {
        var _a;
        const variation = (_a = props.variation) !== null && _a !== void 0 ? _a : 'default';
        const component = components[variation] || components.default;
        return component(props, ref);
    });
    return componentWrapper;
}
export { componentSelector };
