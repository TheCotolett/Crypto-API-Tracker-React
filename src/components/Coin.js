import React from 'react'
import './Coin.css'
function Coin({img, name, price, perc_change}) {
    if(perc_change !=='undefined')
    {
        return (
            <div className='coin-card'>
                <div className='upper-part'>
                    <img className='coin-img' alt="logo" src={img}></img>
                    <h2 className='coin-name'>{name}</h2>
                </div>
                <div className='bottom-part'>
                    <p className='coin-p'>${price}</p>
                    {perc_change > 0 ? 
                        (<p className="green">+{perc_change.toFixed(2)}%</p>) :
                        (<p className="red">{(""+perc_change).substring(0, 5)}%</p>)
                    }
                </div>
            </div>
        )}
    else
        return <></>
}

export default Coin