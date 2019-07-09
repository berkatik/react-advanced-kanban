import React, { Component } from 'react'

import Kanban from './Kanban'
import { initialData } from '../initialData.js';

export default class App extends Component {


    render() {
        return (
            <Kanban data={initialData}></Kanban>
        )
    }
}
