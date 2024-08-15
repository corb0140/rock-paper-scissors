import "./globals.css";
import StoreProvider from "@/app/redux/StoreProvider";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Rock, Paper, Scissors",
  description: "Play a game of Rock, Paper, Scissors against the computer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Barlow h-screen w-full bg-bgGradient">
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
