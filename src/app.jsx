import React, {useState, useEffect}from 'react';
import axios from 'axios';

const Container = (props) =>{
const [group, setGroup] = useState({});
const [info, setInfo] = useState([]);


    useEffect(()=> {
        axios.get( "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=AIzaSyAGnWKXtaDiprjEzk4jg-sFlIL_Vz9g36M")
            .then(response => setGroup(response.data[props.index])
             )}, [group, props.index]);


    useEffect(() => {
        axios.get("http://localhost:5000/api/comments/1234id")
        .then(response => setInfo(response.data)
        )}, [info]);

    console.log(info.text)
    

    return(
        <div>
            <h1>{info}</h1>
        </div>
    );
}

export default Container;