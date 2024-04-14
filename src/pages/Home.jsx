import React from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requsest"

const Home=()=>{
    return (
    <>
    <Main />
    <Row rowId='1' title='UpComing' fetchURL={requests.requestUpcoming} />
    <Row rowId='2' title='Popoular' fetchURL={requests.requestPopular} />
    <Row  rowId='3' title='Trending' fetchURL={requests.requestTrending} />
    <Row  rowId='4'  title='Horror' fetchURL={requests.requestHorror} />
    <Row  rowId='5' title='TopRated' fetchURL={requests.requestTopRated} />
    </>
    )
}

export default Home