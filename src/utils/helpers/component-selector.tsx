import { forwardRef } from 'react'

function componentSelector<
    T extends string,
    K,
    H extends keyof K = never
>(
    components: Record<string, any>
) {
    // Aqui H são as props que você quer "omitir" ao usar o wrapper
    type WrapperProps = Omit<K, H> & { variation?: T; ref?: any; locked?: boolean }

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
