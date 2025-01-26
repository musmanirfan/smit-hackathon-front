// "use client";

// import { createContext, useState, useEffect, ReactNode } from "react";

// // Define the shape of the user object and context
// interface User {
//   id: string;
//   name: string;
//   email: string;
//   token: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (userData: User) => void;
//   logout: () => void;
// }

// // Create the AuthContext
// export const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// // Props for the AuthProvider
// interface AuthProviderProps {
//   children: ReactNode;
// }

// // AuthProvider component
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // Load user from localStorage on initial render
//   useEffect(() => {
//     const localUser = localStorage.getItem("taskUser");
//     if (localUser) {
//       setUser(JSON.parse(localUser)); // Parse and set user if found
//     }
//   }, []);

//   // Login function to update user
//   const login = (userData: User) => {
//     localStorage.setItem("taskUser", JSON.stringify(userData));
//     setUser(userData);
//   };

//   // Logout function to clear user
//   const logout = () => {
//     localStorage.removeItem("taskUser");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
