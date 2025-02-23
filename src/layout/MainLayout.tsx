import Navbar from "../components/shared/navbar";
import { ThemeProvider } from "../context/ThemeContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
