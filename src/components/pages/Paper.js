import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css'
function Paper(){
    return ( <div className="cards__container">
    <div className="cards__wrapper">
        <ul className="cards__items">
            <CardItem
                src={process.env.PUBLIC_URL + '/images/paper-bridge-1 .jpg'}
                text='Paper Bridge Model'
                label='New'
                path='/paper-bridge'
            />

        </ul>
    </div>
</div>
)
}
export default Paper