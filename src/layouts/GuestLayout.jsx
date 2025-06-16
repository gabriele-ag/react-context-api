import AppHeader from "../components/AppHeader";
import {Outlet} from "react-router-dom";
import Alert from "../components/Alert"
import { useAlertContext } from "../contexts/AlertContext";

function GuestLayout() {
    const {showAlert} = useAlertContext()
    return (
    <>
        <AppHeader />
        {showAlert && <Alert/>}
        <Outlet />
    </>
    );
};

export default GuestLayout;