 import React,{Component} from 'react'
// importing  classes to use react router dom
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import MyFirstComponent from './component/firstcomponent'
import DigitaClock from './component/digitalclock'
import { ApiCall } from './component/apiCall'
import DynamicCard from './component/dynamicCard'
import MyFourthComponent from './component/fourthComponent'
import MaterialUIHome from './materialUi/materialUiHome'
import TabExample from './materialUi/tab';
import WeatherHome from './weatherInfo/weatherHome'

 class Routes extends Component{
     render(){
         return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <MyFirstComponent/>
                        </Route>

                        <Route path="/clock" exact>
                            <DigitaClock/>
                        </Route>

                        <Route path='/api-call' exact>
                            <ApiCall/>
                        </Route>

                        <Route path='/route-programatically' exact>
                            <MyFourthComponent/>
                        </Route>

                        <Route path='/dynamicRoute/:id/:value' exact>
                            <DynamicCard/>
                        </Route>

                        <Route path='/tab' exact>
                            <TabExample/>
                        </Route>

                        <Route path='/mui' exact>
                            <MaterialUIHome/>
                        </Route>

                        <Route path='/weather' exact>
                            <WeatherHome/>
                        </Route>
                    </Switch>
                </Router>
            </div>

         )
     }
 }

 export {Routes}
