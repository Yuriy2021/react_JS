
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Home } from "../routes/Home";
import { Chats } from "../routes/Chats";
import { Profile } from "../routes/Profile";
import {LoginRoute} from "../routes/login";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';
import { Provider } from 'react-redux';
import { FetchReqres } from "../routes/reqres/";
import { MiddlewareReqRes } from "../routes/reqres/middleware"
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, initAuthAction } from "../store/user/reducer";
import { useEffect } from "react";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColums: "200px 1fr"
    }
});

export const Format = () => {
        return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <AppBar position="static">
                        <Toolbar>
                            <Button to="/" component={Link} color="inherit">
                                Home
                            </Button>
                            <Button to="/Profile" component={Link} color="inherit">
                                Profile
                            </Button>

                            <Button to="/Chats" component={Link} color="inherit">
                                Chats
                            </Button>
                            <Button to="/login" component={Link} color="inherit">
                                Chats
                            </Button>
                            <Button to="/reqres" component={Link} color="inherit">
                                Reqres
                            </Button>
                            <Button to="/reqres/middleware" component={Link} color="inherit">
                                MiddlewareReqRes
                            </Button>

                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact component={Chats} path="/chats" />
                        <Route exact component={Profile} path="/profile" />
                        <Route exact component={Home} path="/" />
                        <Route exact component={LoginRoute} path="/login" />
                        <Route path="/reqres/middleware">
                            <MiddlewareReqRes />
                        </Route>
                        <Route path="/reqres">
                            <FetchReqres />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>

    );
};
