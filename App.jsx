import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes/Index';
import { AuthProvider } from './src/Context/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}