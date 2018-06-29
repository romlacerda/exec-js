import React from 'react'
import ReactDOM from 'react-dom'

// import GoodMorning from './components/GoodMorning'
// import { GoodAfternoon, GoodNight } from './components/Multiples'
// import Multiples from './components/Multiples'
import Parent from './components/Parent'
import Child from './components/Child'

ReactDOM.render(
<div>
    <Parent nome="Rômulo" sobrenome="teste">
        <Child nome="Pedro" sobrenome="Silva"/>
    </Parent>
</div>
, document.getElementById('root')
)