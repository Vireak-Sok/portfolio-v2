import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sok Vireak",
  description: "Got a digital project idea and want to bring it to reality? Discover a showcase of innovative UX/UI design solutions crafted to elevate user experiences. Explore a diverse portfolio of projects and find inspiration for your next design endeavor. Get in touch to collaborate on bringing your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme-bg theme-tx backdrop-blur-md overflow-x-clip`}>
        {children}
      </body>
    </html>
  );
}