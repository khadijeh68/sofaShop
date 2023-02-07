import Categories from "../../components/categories";
import Slide from "../../components/slider";
import styles from "./home.module.css"

function Home() {
  return (
    <>
       <Slide /> 
    <div className={styles.home}>
       
       <Categories/>
    </div> 
    </>

  );
}

export default Home;
