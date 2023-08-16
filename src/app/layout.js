import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
import { Inter, Montserrat, Roboto, Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '700']
})
 const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '700']
})

export const metadata = {
  title: 'Cesar Sample Website',
  description: 'Construction website demo for Cesar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${montserrat.variable}  ${roboto.variable} font-sans font-serif font-mono`}>
      <body className={inter.className}><NavBar/>{children}<Footer/></body>
    </html>
  )
}
