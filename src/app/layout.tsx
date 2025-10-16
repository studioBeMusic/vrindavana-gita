import "./../styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/_pages">All Pages</a>
        </nav>
        {children}
        <footer>© {new Date().getFullYear()} Vṛndāvana-gītā</footer>
      </body>
    </html>
  );
}
