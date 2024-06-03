import {render} from '@testing-library/react-native'


const AllTheProviders = ({children}:React.PropsWithChildren) => {
  return (
    <>
    {children}
    </>
  )
}

const customRender = (ui:any, options?:any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}