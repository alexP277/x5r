import React, {useEffect, useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import './../App.css'
import {routes} from "../shared/const/routes";
import {Preloader} from "../components";

const Routing = () => {
    const [isEmulateLoading, setIsEmulateLoading] = useState<boolean>(true);
    const {pathname} = useLocation()

    useEffect(() => {
        setTimeout(() => setIsEmulateLoading(false), 2000);
        return () => setIsEmulateLoading(true);
    }, [pathname])

    return (
        <div className="Pages">
            {
                isEmulateLoading ? <Preloader/> : <Routes>
                    {routes.map(({component, url, id}) => (
                        <Route key={String(id)} path={url} element={component}/>
                    ))}
                </Routes>
            }
        </div>
    );
};

export default Routing;
