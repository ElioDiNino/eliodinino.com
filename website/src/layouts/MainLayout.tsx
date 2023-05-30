import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Layout = (props: any) => {
    const { pathname } = useLocation();
    const layout = props.layout;

    return (
        <>
            {!layout.hideHeaderPaths.includes(pathname) && <Header isMobile={layout.isMobile} />}
            <Outlet />
            {!layout.hideFooterPaths.includes(pathname) && <Footer />}
        </>
    );
}

export default Layout;
