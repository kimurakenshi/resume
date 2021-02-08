import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="h-screen background on-background font-default">
    <Header />

    <Nav />

    {children}

    <hr className="border-gray-700 border-opacity-90 w-1/2 m-auto" />

    <Footer />
  </div>
);

export default Layout;
