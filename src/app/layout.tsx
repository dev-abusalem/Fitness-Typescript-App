import './globals.css';
import { Josefin_Sans } from 'next/font/google';

const josfin_sans = Josefin_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Include any font loading code or metadata here */}
        <title>Fitness</title>
      </head>
      <body className={josfin_sans.className}>
          {children}
      </body>
    </html>
  );
}
