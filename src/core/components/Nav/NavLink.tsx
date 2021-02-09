import Link from 'next/link';

const NavLink = ({ children, path, scrollToTop = true }) => (
  <li className="px-2 md:px-4 hover:underline opacity-80 hover:opacity-100 hover:scale-110 transform duration-200 text-sm md:text-base">
    <Link href={path} scroll={scrollToTop}>
      <a>{children}</a>
    </Link>
  </li>
);

export default NavLink;
