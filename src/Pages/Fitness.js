import React, { useState,useEffect } from 'react'

import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Fitness = () => {
    const [data,setdata]= useState();
    useEffect(()=>{
       fetch("https://node-back-end-czgr.onrender.com")
       .then((res)=>(res.json()))
       .then((res)=>(setdata(res)))
         
    },[])
    console.log(data);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
            <h1 style={{ margin: "20px 0px 20px 41.9%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    { data &&
                        data.filter((article) => { return article.category === "Fitness" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    { data &&
                        data.filter((article) => { return article.category === "Fitness" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Fitness