import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = async (url) => {
    const [data,setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false) 

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const responseCollege = await axios.get(
    //         "http://localhost:5000/api/colleges"
    //       );
    //       const responseCourse = await axios.get(
    //         "http://localhost:5000/api/courses"
    //       );
    //       setCollege(responseCollege.data);
    //       setCourse(responseCourse.data);
    //     };
    //     fetchData();
    //   }, []);
};
