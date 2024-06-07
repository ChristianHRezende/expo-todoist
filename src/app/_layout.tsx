import {Slot} from 'expo-router';
import {PaperProvider} from 'react-native-paper';
import {
  QueryClient,
  QueryClientProvider as RQQueryClientProvider,
} from '@tanstack/react-query';
import '@/utils/firebaseConfig';
import {theme} from '@/styles/theme';

const queryClient = new QueryClient(); // response manage global state of aplication

export default function MainLayout() {
  return (
    <RQQueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <Slot />
      </PaperProvider>
    </RQQueryClientProvider>
  );
}
