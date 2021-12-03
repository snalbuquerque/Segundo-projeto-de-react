import {useState, useEffect} from 'react'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input'

import ImagePortfolio from '../../assets/portfolio.svg'
import './Portfolio.styles.css'

const Portfolio = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://api.github.com/users/snalbuquerque/repos')
      const data = await response.json()

      setRepositories(data)
    }
    getData()
  
  },[])

  return(
    <>
      <Menu />
      <Header image={ImagePortfolio}>Meus projetos</Header>
      <div className="main">
      
          
          <div className="card-container" >
            <Input/>
            {repositories.map(repo=>
              <div className="card">
                <h3 key={repo.id}>{repo.name}</h3>
                <p>{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                </a>
              </div>
            )}
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio 