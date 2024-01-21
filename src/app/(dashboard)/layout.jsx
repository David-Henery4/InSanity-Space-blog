import { Inter } from "next/font/google";
import "../../app/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Time Blog Dashboard",
  description: "CMS Dashboard for Space Time Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-veryDarkBlue text-white">
      <body className={`${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
