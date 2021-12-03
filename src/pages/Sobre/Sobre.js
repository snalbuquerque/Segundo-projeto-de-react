import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ImageAbout from '../../assets/about.svg'
import Footer from '../../components/Footer/Footer'


import './Sobre.styles.css'
const Sobre = () => {
 return (
   <>
    <Menu />
    <Header image={ImageAbout}>Sobre mim</Header>
    <div className='main'>
      <img src="../imagem-sobre.jpg" alt="foto" />
      <div>
        <h2>Sâmara Nascimento</h2>
        <p>Desenvolvedora Front-End pela Reprograma</p>
        
       
      </div>
    </div>
    <Footer />
  </>
 )
}

export default Sobre