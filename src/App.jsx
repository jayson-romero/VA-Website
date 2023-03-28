import styles from './styles';
import { profile} from './assets'

function App() {


  return (
    // backgound
    <div className={`CTA-gradient w-full ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>

        {/* white box  */}
        <div className={`${styles.boxWidth} ${styles.paddingY} ${styles.flexCenter} ${styles.paddingX} bg-white rounded-3xl flex flex-col md:flex-row md:justify-around md:flex-row-reverse gap-20` }>

            <img src={profile} alt="profile" />

            <div>
                <p>Hello, I'm Shirley</p>
                <h1 className='font-inter font-bold text-header'>Virtual Assistant base in Philipppines.</h1>
                <p>I provides remote administrative, technical, or creative assistance to clients.</p>
             </div>

        </div>
         

      


    </div>
  )
}

export default App
