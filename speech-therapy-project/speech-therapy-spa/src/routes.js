import React from 'react'
import { Route, Switch } from 'react-router'

import Landing from '@pages/Landing/index'
import Authentication from '@pages/Authentication/index'
import TeacherRoom from '@pages/TeacherRoom/index'
import StudentRoom from '@pages/StudentRoom/index'

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Landing} exact/>
            <Route path="/student/:slug" component={StudentRoom} />
            <Route path="/teacher" component={TeacherRoom} />
            <Route path='/login' component={Authentication} />
            <Route path='/register' component={Authentication} />
        </Switch>
    )
}