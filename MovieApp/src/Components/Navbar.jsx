import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

let API_key = "&api_key=995a2bf39f72f60a0cfe8f2b8866bc8e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?include_adult=true&include_video=false&language=en-US&page=1" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const Navbar = () => {
  const [moviedata, setmoviedata] = useState([])
  const [url_set, seturl] = useState(url)
  const [search, setsearch] = useState()
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
      url = base_url + "/movie/upcoming?language=en-US&page=1" + API_key;
    }
    if (Movielink == 'Kids') {
      url = base_url + "/movie/top_rated?language=en-US&page=1" + API_key;
    }
    if (Movielink == 'Drama') {
      url = base_url + "/movie/now_playing?language=en-US&page=1" + API_key;
    }
    if (Movielink == 'Comedie') {
      url = base_url + "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc" + API_key;
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
      <Navbar expand="lg" className="bg-info">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-1 my-lg-0">
              {
                arr.map((item) => {
                  return (
                    <Nav.Link href="#" className='text-white' name={item} onClick={(e) => { geturl(e.target.name) }}>{item}</Nav.Link>
                  )
                })
              }
            </Nav>
          </Navbar.Collapse>
          <div>
            <input type="text" placeholder='Enter the movie name' className='p-2 border-0' value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={searchmovie} />
            <button className='p-2 border-0' onClick={searchbtn}>Search</button>
          </div>
        </Container>
      </Navbar>
      {/* <nav className='d-flex justify-content-around align-items-center p-2'>
        <ul className='d-flex w-50 justify-content-between list-unstyled pt-3 fw-bold'>
          {
            arr.map((item) => {
              return (
                <li><NavLink className='text-white text-decoration-none fs-5 ' name={item} onClick={(e) => { geturl(e.target.name) }}>{item}</NavLink></li>
              )
            })
          }
        </ul>
        <div>
          <input type="text" placeholder='Enter the movie name' className='p-2 border-0' value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={searchmovie} />
          <button className='p-2 border-0' onClick={searchbtn}>Search</button>
        </div>
      </nav> */}
      <div>
        {
          (moviedata.length == 0) ? <p className='notfound'>Not Found</p> : moviedata.map((data, key) => {
            // console.log(data);
            // console.log(moviedata.length);

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

export default Navbar
