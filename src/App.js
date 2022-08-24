import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
export default function App(){
    return(
        <BrowserRouter>
        <Route path='/' component={Header}/>
        <Switch>
            <Route exact path='/' component={Screen1}/>
            <Route exact path='/1' component={Screen2}/>
        </Switch>
        </BrowserRouter>
    )
}