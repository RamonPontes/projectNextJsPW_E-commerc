import { AuthProvider } from "@/contexts/auth";
import { LoadingProvider } from "@/contexts/loading"; 
import "./globals.css";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <LoadingProvider>
          <body>
            <Loading />
            <Header id="header" />
            {children}
          </body>
        </LoadingProvider>
      </AuthProvider>
    </html>
  );
}
