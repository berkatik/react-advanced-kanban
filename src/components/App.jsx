import React, { Component } from 'react'

import Kanban from './Kanban'
import { initialData } from '../initialData.js';

export default class App extends Component {


    render() {
        return (
            <div>
                test!!!!
            <Kanban data={initialData}></Kanban>
            </div>
        )
    }
}
