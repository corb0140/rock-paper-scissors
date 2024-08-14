import "./globals.css";

export const metadata = {
  title: "Rock, Paper, Scissors",
  description: "Play a game of Rock, Paper, Scissors against the computer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Barlow">{children}</body>
    </html>
  );
}
