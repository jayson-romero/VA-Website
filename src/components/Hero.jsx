import { profile} from '../assets'
import  { Linkedin, Instagram, Dribble}  from './icons'

import styles from '../styles'

const Hero = () => {
  return (
    <div className={` ${styles.flexCenter}  flex-col md:flex-row md:justify-around md:items-start md:flex-row-reverse gap-y-6` }>
            
        <img src={profile} alt="profile" />

        <div>
            <p className='pb-[12px]'>Hello, I'm Shirley</p>
            <h1 className='font-inter font-bold text-2xl sm:text-[40px] sm:leading-[58px] pb-4 md:pb-[15px] lg:max-w-[481px]'>Virtual Assistant base in Philipppines.</h1>
            <p className='text-[18px] pb-[15px] md:pb-[31px] max-w-[425px]'>I provides remote administrative, technical, or creative assistance to clients.</p>

            <div className='flex gap-6 items-center m-auto pb-10 md:pb-[40px] '>
            <Dribble/>
            <Instagram/>
            <Linkedin/>
            </div>

        <div className='flex gap-6'>
          <button className='bg-gradient md:w-[166px] w-[130px] h-[50px] p-[2px] rounded-lg cursor-pointer opacity-90 hover:opacity-100'>
            <a href='' className={`${styles.flexCenter} flex-col bg-white hover:bg-gradient text-primary hover:text-white font-bold w-[100%] h-[100%] rounded-lg opacity-100`}
            >Portfolio</a>
          </button>

          <button className='bg-gradient md:w-[166px] w-[130px] h-[50px] p-[2px] rounded-lg opacity-80 hover:opacity-100 cursor-pointer'>
            <a href='' className={`text-white font-bold w-[100%] h-[100%] rounded-lg opacity-100`}>Let's Talk</a>
          </button>
        </div>

        </div>
    </div>
  )
}

export default Hero