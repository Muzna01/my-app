import React from 'react'
import{Footer,Blog,Possibility,Features,What,Header} from './containers';

import{Cta,Brand,Navbar} from './components';

const App = () => {
  return (
    <div className='App '>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
     <Brand/>
     <What/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App