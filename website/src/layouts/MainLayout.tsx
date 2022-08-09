import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Layout = ({ hideHeaderPaths = ['/links'], hideFooterPaths = ['/links'] }) => {
    const { pathname } = useLocation();

    return (
        <>
            {!hideHeaderPaths.includes(pathname) && <Header />}
            <Outlet />
            {!hideFooterPaths.includes(pathname) && <Footer />}
        </>
    );
}

export default Layout;
