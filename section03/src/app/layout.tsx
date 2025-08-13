import Link from "next/link";
import "./globals.css";
import style from "./laytout.module.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer>제작 dohee</footer>
        </div>
      </body>
    </html>
  );
}
