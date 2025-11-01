import { forwardRef } from 'react'

function componentSelector<T extends string, K>(
    components: Record<string, any>,
    ommitedKeys?: (keyof (K & { variation?: T; ref?: any; locked?: boolean }))[]
) {
    type Selector = K & { variation?: T; ref?: any; locked?: boolean }

    if (!components?.default) {
        throw new Error(`No default component defined in components.`)
    }

    const componentWrapper = forwardRef<any, Omit<Selector, keyof typeof ommitedKeys>>((props, ref) => {
        const variation = props.variation ?? 'default'
        const component = components[variation] || components.default

        return component(props as K, ref)
    })

    return componentWrapper
}

export { componentSelector }
