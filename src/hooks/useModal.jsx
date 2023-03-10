import { useState, useRef } from "react";
import Button from '../components/button'
import img from '../assets/start-game.jpg'
import logo from '../assets/logo-rick-and-morty.png'
import imgLoading from '../assets/loading.jpg'

export default function UseModal(setStatusGame){
    const [modal, setModal] = useState({
        visible: true,
        texto: '',
        template: 'startGame',
      })

      const firstRender = useRef(0)

      function changeMessage(txt){
        setModal((previusState) => {
            return {...previusState, template: 'default', visible: true, texto: `${txt}`}
          })
      }

      function reStart(){
        setStatusGame('cleanModal')
      }

      function clearModal(){
        setStatusGame('start')
        setModal((previusState) => {
            return {...previusState, visible: false}
          })
      }

      function handleStartGame(){
        setModal((previusState) => {
          return {...previusState, template: 'loading', visible: true}
        })
        setStatusGame('cleanModal') 
      }
  
      function TemplateStartGame(){
          return(
              <div className="modal-template" style={{ backgroundImage: `url(${img})` }}>
                  <div className="content-flex">
                      <img src={logo} alt="Rick and Morty"/>
                      <Button  text={firstRender.current === 0 ? 'Jugar' : 'Nuevo intento'}  textColor="#2E7C30" onClick={handleStartGame} />
                  </div>
                  
              </div>
          )
      }
  
      function TemplateDefault(){
          return(
              <div className="modal-template default">
                      <img src={logo} alt="Rick and Morty"/>
                      <p className='txt'>{modal.texto}</p>
                      <Button text='Continuar'  textColor="#2E7C30" onClick={clearModal} />
              </div>
          )
      }
  
      function TemplateLoading(){
          return(
              <div className="modal-template loading">
                  <img src={imgLoading} />
                  <p className='txt'>Cargando...</p>
              </div>
          )
      }
      
      let template = ''
  
      switch(modal.template){
          case'startGame':{
           template = <TemplateStartGame/>
           break
        }
        case'default':{
            template = <TemplateDefault/>
            break
        }
        case'loading':{
            template = <TemplateLoading/>
            break
        }
        default:
            template = ''
        }
        
        

    return {template, modal, changeMessage, reStart}
}