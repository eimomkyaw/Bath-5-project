import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPick from "./components/TopPick";


function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Feature></Feature>
      <Delivery></Delivery>
      <TopPick></TopPick>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );

  
}

export default App
