import {render} from '@testing-library/react-native';
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import {theme} from '@/styles/theme';

const queryClient = new QueryClient();

const AllTheProviders = ({children}: React.PropsWithChildren) => {
  return (
    <RQQueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </RQQueryClientProvider>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
