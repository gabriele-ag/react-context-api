import { Link, useNavigate } from "react-router-dom";

function Page404() {
const navigate = useNavigate()

    return (
        <main>
            <section className="flex flex-column-center">
                <h1 className="notfoundTitle m-bottom-40">404 Pagina non trovata</h1>
                <div>
                    <Link className="backToPost" to="/posts">Torna alla pagina dei Post</Link>
                    <Link className="backToHome" onClick={(event) => {
                        event.preventDefault();
                        navigate("/")
                    }}
                        >Torna alla Home e crea un nuovo post!</Link>
                </div>
            </section>
        </main>
    );
}

export default Page404

