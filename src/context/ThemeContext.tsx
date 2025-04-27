import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background', '#fafafa');
      root.style.setProperty('--text', '#1a202c');
      root.style.setProperty('--accent', '#8b5cf6');
      root.style.setProperty('--accent-hover', '#7c3aed');
      root.style.setProperty('--border', '#e2e8f0');
      root.style.setProperty('--hover', '#f8fafc');
      root.style.setProperty('--secondary', '#64748b');
      root.style.setProperty('--github', '#2da44e');
      root.style.setProperty('--twitter', '#1da1f2');
      root.style.setProperty('--linkedin', '#0077b5');
    } else {
      root.style.setProperty('--background', '#1a1a2e');
      root.style.setProperty('--text', '#e2e8f0');
      root.style.setProperty('--accent', '#8b5cf6');
      root.style.setProperty('--accent-hover', '#7c3aed');
      root.style.setProperty('--border', '#2a2a3f');
      root.style.setProperty('--hover', '#2d2d45');
      root.style.setProperty('--secondary', '#cbd5e1');
      root.style.setProperty('--github', '#6cc644');
      root.style.setProperty('--twitter', '#1da1f2');
      root.style.setProperty('--linkedin', '#0077b5');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};