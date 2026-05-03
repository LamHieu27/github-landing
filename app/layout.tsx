import "./globals.css";

export const metadata = {
  title: "Hiếu | Developer",
  description: "Portfolio GitHub cá nhân",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}