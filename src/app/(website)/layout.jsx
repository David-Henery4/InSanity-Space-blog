import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Navbar, Sidebar } from "@/components/shared";
import { SidebarProvider } from "@/context/sidebarContext";
import LiveVisualEditing from "@/components/preview-components/LiveVisualEditing";
import { draftMode } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Time Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  //
  return (
    <html lang="en" className="bg-veryDarkBlue text-white scroll-smooth">
      <body className={`${inter.className} `}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-mob lgMob:grid-cols-tab lap:grid-cols-lap desk:grid-cols-desk">
          <SidebarProvider>
            <Navbar />
            <Sidebar />
          </SidebarProvider>
          {children}
        </div>
        {draftMode().isEnabled && <LiveVisualEditing/>}
      </body>
    </html>
  );
}
