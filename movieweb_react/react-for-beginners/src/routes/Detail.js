import {useParams} from "react-router-dom";
import {useEffect} from "react";

const DETAIL_API_URL = "https://yts.mx/api/v2/movie_details.json?movie_id"
export default function Detail() {
  const {id} = useParams();
  const getDetail = async () => {
    const res = await fetch(`${DETAIL_API_URL}=${id}`)
    const json = await res.json();
    console.log(json)
  }
  useEffect( () => {
    getDetail()
  }, []);

  return <h1> Detail </h1>
}