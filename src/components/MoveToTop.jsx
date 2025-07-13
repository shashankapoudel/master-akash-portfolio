import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of page on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default MoveToTop;
