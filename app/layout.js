import "./globals.css";
import StoreProvider from "./redux/StoreProvider";

export const metadata = {
  title: "Rock, Paper, Scissors",
  description: "Play a game of Rock, Paper, Scissors against the computer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Barlow">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
