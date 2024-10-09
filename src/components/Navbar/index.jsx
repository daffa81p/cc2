// components/Header.js
import Link from 'next/link'
import Image from 'next/image';
function Navbar() {
  return (
    <header className="bg-white ">
      <nav className="bg-black text-white p-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
        <Image
          src="https://s7d2.scene7.com/is/image/Caterpillar/CM20160629-33279-63115?fmt=%20png-alpha"
          alt="CAT Logo"
          width={100}
          height={30}
        />
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about" className="text-lg">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-lg">
              Products
            </Link>
          </li>
          <li>
            <Link href="/teams" className="text-lg">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar