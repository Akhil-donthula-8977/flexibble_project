import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"
export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarable develpoer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
