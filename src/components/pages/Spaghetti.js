import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import '../Cards.css'
function Spaghetti(){
    return ( <div className="cards__container">
    <div className="cards__wrapper">
        <ul className="cards__items">
            <CardItem
                src={process.env.PUBLIC_URL + '/images/spaghetti.jpg'}
                text='Spaghetti Tower Structure'
                label='New'
            />

        </ul>
    </div>
</div>
)
}
export default Spaghetti