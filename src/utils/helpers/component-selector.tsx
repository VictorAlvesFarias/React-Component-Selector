import { forwardRef } from 'react'

function componentSelector<T extends string, K>(
    components: Record<string, any>
) {
    type WrapperProps = K & { variation?: T; ref?: any; locked?: boolean }

    if (!components?.default) {
        throw new Error(`No default component defined in components.`)
    }

    const componentWrapper = forwardRef<any, WrapperProps>((props, ref) => {
        const { variation = 'default', ...rest } = props
        const component = components[variation] || components.default
        
        return component(rest as K, ref)
    })

    return componentWrapper
}

export { componentSelector }
