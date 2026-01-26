"use client"

import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {

  const router = useRouter()

  function buttonHandlerClickForward() {
    router.forward()
  }

  function buttonHandlerClickBack() {
    router.back()
  }

  return (
    <html lang="en">
      <body>
        <button onClick={buttonHandlerClickBack} >Atrás</button>
        <button onClick={buttonHandlerClickForward} >Adelante</button>
        <button onClick={() => { router.push("/") }} >Home</button>
        <hr/>
        {children}
      </body>
    </html>
  );
}
