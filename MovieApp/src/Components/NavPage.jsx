import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

let API_key = "&api_key=995a2bf39f72f60a0cfe8f2b8866bc8e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?include_adult=true&include_video=false&language=en-US&page=1" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const Navpage = () => {
    const Navigate=useNavigate()
    const [moviedata, setmoviedata] = useState([])
    const [url_set, seturl] = useState(url)
    const [search, setsearch] = useState()
    const sign=()=>{
        Navigate('/sign in')
    }
    useEffect(() => {
        try {
            fetch(url_set).then(res => res.json()).then(data => setmoviedata(data.results))
        } catch (error) {
            console.log(error);

        }
    }, [url_set])
    const geturl = (Movielink) => {
        if (Movielink == 'Popular') {
            url = base_url + "/movie/popular?language=en-US&page=1" + API_key;
        }
        if (Movielink == 'Theatre') {
            url = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + API_key;
        }
        if (Movielink == 'Kids') {
            url = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key;
        }
        if (Movielink == 'Drama') {
            url = base_url + "/discover/movie?with_genres=18&primary_release_year=2014" + API_key;
        }
        if (Movielink == 'Comedie') {
            url = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_key;
        }
        seturl(url)
    }
    const searchmovie = (event) => {
        if (event.key == 'Enter') {
            url = base_url + "/search/movie?api_key=995a2bf39f72f60a0cfe8f2b8866bc8e&query=" + search;
            setsearch(" ")
        }
        seturl(url)

    }
    const searchbtn = () => {
        url = base_url + "/search/movie?api_key=995a2bf39f72f60a0cfe8f2b8866bc8e&query=" + search;
        seturl(url)
        setsearch(" ")

    }
    return (
        <div>
            <Navbar expand="lg" className="Navbar" sticky="top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll tab">
                        <Nav className="me-auto my-1 my-lg-0 " justify variant="tabs" defaultActiveKey="0">
                            {
                                arr.map((item, key) => {
                                    return (
                                        <Nav.Item >
                                            <Nav.Link key={key} eventKey={key} className='text-muted fs-5 fw-bold px-4 navlink' name={item} onClick={(e) => { geturl(e.target.name) }}>{item}</Nav.Link>
                                        </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <div className='nav'>
                        <input type="text" placeholder='Enter the Name' className='p-2 border-0 ' value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={searchmovie} />
                        <button className='p-2 border-0' onClick={searchbtn}>Search</button>
                    </div>
                    <div>
                        <button className='p-2 border-0 mx-3' onClick={sign}>Sign In</button>
                    </div>
                </Container>
            </Navbar>
            <div>
                {
                    (moviedata.length == 0) ? <p className='notfound'>Not Found</p> : moviedata.map((data, key) => {
                        return (
                            <div className='card_list'>
                                <Card info={data} key={key} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navpage
