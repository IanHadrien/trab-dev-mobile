import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes/Index';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}