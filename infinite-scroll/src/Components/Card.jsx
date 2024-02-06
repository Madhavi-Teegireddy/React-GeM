import React from 'react'
import CardInfo from './CardInfo'

const Card = ({movieInfo}) => {
  return (
    <>
    <h4>List of cards</h4>
    <div  style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap: "10px"}}>
        {movieInfo.map((val,id) => {
            return <CardInfo key={id} myData={val}/>
        })}
    </div>
    </>
  )
}

export default Card;