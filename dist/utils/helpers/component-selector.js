import { forwardRef } from 'react';
function componentSelector(components) {
    if (!(components === null || components === void 0 ? void 0 : components.default)) {
        throw new Error(`No default component defined in components.`);
    }
    const componentWrapper = forwardRef((props, ref) => {
        const { variation = 'default', ...rest } = props;
        const component = components[variation] || components.default;
        return component(rest, ref);
    });
    return componentWrapper;
}
export { componentSelector };
