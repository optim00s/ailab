import "./globals.css";

export const metadata = {
  title: "Azerbaijan Artificial Intelligence Lab",
  description: "An",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
