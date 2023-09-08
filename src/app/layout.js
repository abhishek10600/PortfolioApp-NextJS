import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhishek Sharma',
  description: 'Full stack developer. Nextjs, Reactjs, Expressjs, Nodejs, MongoDb developer. MERN developer. Developing web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
