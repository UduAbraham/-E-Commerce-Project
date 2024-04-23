
import NavBar from './NavBar';
import SideBar from './SideBar';
import Iphone from './Iphone';
import Flash from './assets/images/Flash';
import Card from './Card';
import GridLay from './GridLay';
import Product from './Products';
import Category from './Categories';
import Explore from './Explore';
import AsideBar from './AsideBar';
import Woman from './Woman\'s';
import ExploreNext from './ExploreNext';
import Footer from './Footer';
import Care from './Care';
import Flex from './Flex';


function App() {
    return (
      <div className="App">
          
           <Flex/>
          <NavBar/>
          <SideBar/>
          <Iphone/>
          <Flash/>
           <Card/>
          {/* <Care/> */}
           <GridLay/>
          <Product/>
          <Category/>
          <Explore/>
          {/* <AsideBar/> */}
          <Woman/>
          <ExploreNext/>
          <Footer/>   
      </div>

    );
}

export default App;
