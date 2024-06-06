import { useState,useEffect } from 'react';
import '../estilos/nivelMedio.css';
import { preguntas } from '../carpeta-preguntas/preguntasDF';
import moneda from "../imagen/moneda.webp"
import cerebrotriste from "../imagen/cerebrotriste.webp"
import cerebrofeliz from "../imagen/cerebrofeliz.jpg"
import Layout from './layout';

function NivelDificil() {
  const [point,setPoint]=useState(0);
  const [actualPregunta,setActualPregunta]=useState(0);
  const [finish,setFinish]=useState(false);
  const [contador,setContador]=useState(60)
  const [disable,setDisable]=useState(false)

  useEffect(()=>{
    const interval=setInterval(()=>{
       if(contador > 0) setContador(contador-1)
       if(contador===0){
          setTimeout(()=>{
          setActualPregunta(actualPregunta+1);
          setContador(60);
          },2000)
        }
        if(contador===0 && actualPregunta===preguntas.length-1){
          setTimeout(()=>{
            setFinish(true)
          },2000)
        }
       
    },1000)
    return () => clearInterval(interval)
  
  },[contador,actualPregunta]);

  function respuesta(iscorrect,e){
     console.log(iscorrect);
     e.target.classList.add(iscorrect?"correct":"incorrect");
     iscorrect && setPoint(point + 10);
     setDisable(true)

     if(actualPregunta===preguntas.length-1){
      setTimeout(()=>{
        setFinish(true)
      },2000);
     }else{
      setTimeout(()=>{
        setActualPregunta(actualPregunta+1);
        setContador(60)
        setDisable(false)
      },2000)
    }
  }
      
     
  return (
    <>
    <Layout>
    {
      !finish && 
      <div>
        <div className='punto'>
          <div className='container'>
            <h4><span class="flat-color-icons--alarm-clock"></span></h4>
            time: {contador}
          </div>
          <div className='container'>
            <h4><img src={moneda} alt='img'/></h4>
            points: {point}
          </div>
        </div>
        
        <div className='container-seccion'>   
          <section>
            <h4>{preguntas[actualPregunta].question}</h4>
          </section>
        
          <section className='seccion-1'>
            {preguntas[actualPregunta].options.map((res)=>{
              return (
                <button key={res.resText}
                  onClick={(e)=>respuesta(res.isCorrect,e)}
                  className='btn-repuesta' disabled={disable}>
                  {res.resText}
                </button>
              )})
            }
            <button className='btn-fin' onClick={()=>window.location="/"} >
                  finalizar
            </button>
          </section>
        </div>

      </div>
    }
    {
      finish && 
      <div className='container-finish'>
        <h2>game over</h2>
        <div className='punto'>
          <h4>Win {point} points</h4>
        </div>
        {point < 70? (
            <div>
              <img src={cerebrotriste} className='img-cerebro' alt='img'/>
              <h2>puedes mejorar</h2>
            </div>):(
            <div>
              <img src={cerebrofeliz} className='img-cerebro' alt='img'/>
              <h2>buen trabajo</h2>
            </div>)
        }
        <button onClick={()=>window.location="/levelFacil"} className='btn-play'>
          play
        </button>
        <button onClick={()=>window.location="/"} className='btn-play'>
          menu principal
        </button>
      </div>
    }
    </Layout>
    </>
  );
}

export default NivelDificil;