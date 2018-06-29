import React from 'react'
import ReactDOM from 'react-dom'

import GoodMorning from './components/GoodMorning'
import { GoodAfternoon, GoodNight } from './components/Multiples'
import Multiples from './components/Multiples'


ReactDOM.render(
<div>
    <Multiples.GoodAfternoon nome="Rômulo" />
    <Multiples.GoodNight nome="Rímulo" />
</div>
, document.getElementById('root')
)