import React from "react";

// Contexts
import { AuthProvider } from "@/contexts/AuthContext";
import { Provider } from "react-redux";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from '@/components/theme-provider'
import store from "./contexts/store";
import createEmotionCache from "./createEmotionCache";


const emotionCache: EmotionCache = createEmotionCache();


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider defaultTheme='light' storageKey='ui-theme'>
            {children}
          </ThemeProvider>
        </CacheProvider>
      </AuthProvider>
    </Provider>
  );
};

export default Providers;
