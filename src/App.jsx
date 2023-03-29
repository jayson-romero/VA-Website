import styles from './styles';
import { Hero, Navbar } from './components';

function App() {


  return (
    // backgound
    <div className={`bg-gradient w-full ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>

        {/* white box  */}
        <div className={`${styles.boxWidth} ${styles.paddingY}  ${styles.paddingX} bg-white rounded-3xl flex flex-col gap-y-10` }>

          <Navbar/>
          <Hero/>

          

        </div>

  </div>

   
  )
}

export default App
