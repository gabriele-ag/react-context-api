import {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAlertContext } from "../contexts/AlertContext"

function Home() {   
    const navigate = useNavigate()

   const initialFormData = {
        author: "",
        title: "",
        body: "",
        public: false,
    }

    

    // Definisco gli stati
    const [formData, setFormData] = useState(initialFormData)
    // const [showAlert,  setShowAlert] = useState(false)
    const { setShowAlert } = useAlertContext()


    // Gestione modifiche al form
    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        console.log(name, value, checked, type);

        setFormData({...formData, [name]: type === "checkbox" ? checked : value})
        // [name] è la variabile

    }

    // Gestisco l'invio dei dati al server
    const sendData = (event) => {
        event.preventDefault();

        axios
            .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then((resp) => {
                console.log(resp)
                    if(resp.data.id) {
                        setFormData(initialFormData)
                        setShowAlert(true);                        
                        setTimeout(() => {
                            setShowAlert(false);

                        },4000);

                    }
                });
    };


    return (
        <>
                <div className="container">
                    <h1 className="my-p">Home</h1>
                    <h3 className="m-bottom-40">Crea il tuo post</h3>
                    <div className="card">
                            <form 
                            onSubmit={sendData}>

                            <div>
                                <label 
                                htmlFor="" 
                                className="flex">Inserisci l'autore</label>
                                <input 
                                type="text"
                                className="inputCreate m-bottom-20" 
                                aria-describedby="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}/>      
                            </div>

                            <div>
                                <label htmlFor="" className="flex">Inserisci titolo del post</label>
                                <input 
                                type="text"
                                name="title"
                                className="inputCreate m-bottom-20"
                                aria-describedby="title-post"
                                value={formData.title}
                                onChange={handleChange}/>
                            </div>

                            <div>
                                <label htmlFor="textforpost" className="flex">Inserisci testo del post</label>
                                <textarea 
                                type="text"
                                name="body"
                                aria-describedby="body-post"
                                className="inputCreate m-bottom-20"
                                onChange={handleChange}
                                value={formData.body}/>
                            </div>

                            <div>
                                <label htmlFor="" className="form-label m-right-20">Vuoi rendere pubblico il tuo post?</label>
                                <input 
                                type="checkbox"
                                name="public"
                                aria-describedby="public-or-not"
                                onChange={handleChange}
                                checked={formData.public}/>
                            </div>

                            <button type="submit" className="button">Inserisci</button>
                            </form>
                    </div>
                </div>
        </>
    );
}


export default Home