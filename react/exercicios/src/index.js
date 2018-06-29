import React from 'react'
import ReactDOM from 'react-dom'

// import GoodMorning from './components/GoodMorning'
// import { GoodAfternoon, GoodNight } from './components/Multiples'
// import Multiples from './components/Multiples'
import Welcome from './components/Welcome'


ReactDOM.render(
<div>
    <Welcome tipo="Bom dia" nome="Rômulo" />
</div>
, document.getElementById('root')
)