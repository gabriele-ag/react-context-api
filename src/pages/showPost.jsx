import {useParams, useNavigate, Link} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import AppLoader from "../components/AppLoader"


function ShowPost() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)
    
    const apiUrl = (`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((resp) => {
                setPost(resp.data)
            })
            .catch((error) => {
                if (error.status === 404) {
                navigate("/not-found")
                }
            })


    }, [id])

    return (
        <main>
            <div>
               {post === null ? (
                    <AppLoader/>
                ) : (
                    <div className="container my-p">
                        <div className="card">
                            <h1 className="m-bottom-20">{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                        <Link className="buttonDetails" to={`/posts`}>Torna indietro</Link>
                    </div>                 
                )}
            </div>
        </main>
    )
}

export default ShowPost