// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setUser(user);
      return true;
    }
    return false;
  };

  const signup = async (email, password) => {
    const newUser = { email, password };
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (res.ok) {
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
