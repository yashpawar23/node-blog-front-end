import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'

const Home = () => {

    const [data,setdata]= useState();
    useEffect(()=>{
       fetch("https://node-back-end-czgr.onrender.com")
       .then((res)=>(res.json()))
       .then((res)=>(setdata(res)))
         
    },[])
    console.log(data);
    return (

        <div>
            <div className='Home'>

                <div className="home__container">
                    <div className="home__first">
                        <h1>Golden Temple</h1>
                    </div>
                    <div className="home__sec">
                        <Link to="/fitness" > <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fitness-quotes-1526505836.jpg?crop=0.671xw:0.998xh;0.187xw,0.00244xh&resize=1200:*" alt="not found" /></Link>
                    </div>
                    <div className="home__thir">
                        <Link to='/technology'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYbMiKvaUQMbrZyg1Y_P9TGeXhYsChatlN478dhcbR6gCblzEJyHXOay0tVbudMo02PI&usqp=CAU" alt="not found" /></Link>
                    </div>
                </div>


                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />
                <div className='home__left left1'>
                    { data &&
                        data.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    { data &&
                        data.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    { data &&
                        data.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Articles</h1>

                <h1 className='Top' >Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px", }} />


                <div className='rightbar2'>
                    { data &&
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
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
                <div className="sidebar2">
                    { data &&
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
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
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    { data &&
                        data.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    { data &&
                        data.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    { data &&
                        data.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Home
