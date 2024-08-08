import { Link } from "react-router-dom";
import "../estilos/home.css"
import Layout from "./layout";
import imgcultura1 from "../imagen/imgcultura1.jpg"



export default function Home() {
  return (
    <>
    <Layout>
    <div className="container-home">
       <h4><u>bienvenidos al Test de cultura general.</u></h4>
       <br />
       <h4>elige el nivel de dificultad y trata de responder las preguntas correctamente, antes de que el tiempo acabe.</h4>
       <img src={imgcultura1} className="img-home" alt="img"/>
       <button className="btn btn-level-1"> <Link className="link" to={"/levelFacil"}>facil</Link></button>
       <button className="btn btn-level-2"><Link className="link" to={"/levelmedio"}>medio</Link></button>
       <button className="btn btn-level-3"> <Link className="link" to={"/levelDificil"}>dificil</Link></button>
       
    </div>
    </Layout>
    </>
  )
}
