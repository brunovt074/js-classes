"use client"
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {

  const router = useRouter()

  return (
    <html lang="en">
      <body>
        <p>Layout</p>
        <button onClick={() => { router.back() }}>Atrás</button>
        <button onClick={() => { router.forward() }}>Adelante</button>
        <button onClick={() => { router.push("/") }}>Home</button>
        {children}
      </body>
    </html>
  );
}
