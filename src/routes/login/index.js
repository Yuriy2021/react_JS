import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, initAuthAction } from "../../store/user/reducer";
import { PublicRoute} from "../../hocs/PublicRoute";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { Login } from "../../pages/Login";
import { Signup } from "../../pages/SignUp";
import { Profile } from "../../pages/Profile";

export const LoginRoute = () => {
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
    }, []);

    return (
        <Switch>
            
            <PublicRoute
                auth={isAuth}
                path={"/login"}
                component={() => <Login />}
            />

            <PublicRoute auth={isAuth} path={"/signup"} component={Signup} />
            <PrivateRoute auth={isAuth} path={"/profile"} component={Profile} />
        </Switch>
    );
};