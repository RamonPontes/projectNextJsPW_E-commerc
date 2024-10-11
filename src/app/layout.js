import { AuthProvider } from "@/contexts/auth";
import "./globals.css";
import Header from "@/components/header/Header";

export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">
      <AuthProvider>
        <body>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
