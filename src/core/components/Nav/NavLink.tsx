import Link from 'next/link';

const NavLink = ({ children, path }) => (
  <li className="px-2 md:px-4 hover:underline opacity-80 hover:opacity-100 hover:scale-110 transform duration-200">
    <Link href={path}>
      <a>{children}</a>
    </Link>
  </li>
);

export default NavLink;
