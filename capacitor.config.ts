import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.hana.hanatestapp',
  appName: 'capacitor-react-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
