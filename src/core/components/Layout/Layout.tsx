import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="h-screen font-default">
    <Header />

    <Nav />

    {children}

    <Footer />
  </div>
);

export default Layout;
