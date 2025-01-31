import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (user:string, password:string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadAuthState = async () => {
      const token = await AsyncStorage.getItem('userToken');
      console.log(token)
      if (token) {
        setIsAuthenticated(true);
        router.replace("/home")
      }else{
        router.replace("/login")
      }
    };
    loadAuthState();
  }, []);

  const login = async (user : string , password :string) => {
    const userName = "Daniel"
    const userPassword = "123456"
    if(user === userName && userPassword === password){
      await AsyncStorage.setItem('userToken', 'dummyToken');
      setIsAuthenticated(true);
      router.replace("/home")
    }
    return 
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}