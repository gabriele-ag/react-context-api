import { useContext } from "react"
import { Link } from "react-router-dom"
import { PostListContext } from "../contexts/PostListContext"


function ListPost() {

    const {postList} = useContext(PostListContext)

    return (

        <div className="container my-p">
            <h1>List Posts</h1>
            <div>
                <ul>
                    {postList.map((curPost, index) => (
                        <li key={index}>
                            <div className="card">
                                <h3>{curPost.title}</h3>
                                <p>{curPost.body}</p>
                                <Link to={`/posts/${curPost.id}`}>Dettagli</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListPost