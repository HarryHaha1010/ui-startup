import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards(){
    return (
        <div className="cards">
            <h1>
                Our projects that we have done
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={process.env.PUBLIC_URL + '/images/paper-bridge-2.jpg'}
                            text='Paper Bridge Project'
                            label='New'
                            path='/paper-bridge'
                        />
                         <CardItem
                            src={process.env.PUBLIC_URL + '/images/Spaghetti-Tower-Challenge.jpg'}
                            text='Spaghetti Tower Project'
                            label='Newest'
                            path='/spaghetti'
                        />

                    </ul>
                </div>
            </div>


        </div>
    )
}
export default Cards