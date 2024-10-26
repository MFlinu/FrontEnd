import Navbar from "./components/navbar"
import Footer from './components/Footer'
import "./globals.css"

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-gradient-to-t from-[#a0d2ab] to-[#def6a7] h-screen">
          <Navbar/>
          <br/>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          {children}
          <br/>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <Footer/>
        </body>
      </html>
    )
  }