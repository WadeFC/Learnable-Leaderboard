import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.learning_path}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.week_01}</span> <br></br>
                            <span>{value.week_02}</span> <br></br>
                            <span>{value.week_03}</span> <br></br>
                            <span>{value.week_04}</span> <br></br>
                            <span>{"Total = "}{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}