import './App.css';
import vectorA from './Assets/vector-A.svg';
import vectorA1 from './Assets/VECTOR-A1.svg';
import vectorL from './Assets/vector-L.svg';
import vectorM from './Assets/vector-M.svg';
import vectorO from './Assets/vector-O.svg';
import vectorP from './Assets/vector-P.svg';

function App() {
  return (
    <div className='App overflow-hidden'>
      <div className='inline-block relative top-1/2 translate-y-[-50%] translate-x-10'>
        <img src={vectorA} alt='a' className='h-[85px] w-[90px]' />
        <img src={vectorM} alt='a' className='h-[85px] w-[90px]' />
        <img src={vectorO} alt='a' className='h-[85px] w-[90px]' />
        <img src={vectorL} alt='a' className='h-[85px] w-[90px]' />
        <img src={vectorA1} alt='a' className='h-[85px] w-[90px]' />
        <img src={vectorP} alt='a' className='h-[85px] w-[90px]' />
      </div>
      <div className='text-white absolute right-0 bottom-0 origin-bottom-left -rotate-90 translate-x-full text-[rgba(255,255,255,0.75)]'>
        <p className='text-[70px] tracking-[6.6px]'>HEAR</p>
        <p className='text-[70px] tracking-[6.6px]'>LATEST</p>
        <p className='text-[70px] tracking-[6.6px]'>TOUR</p>
        <p className='text-[70px] tracking-[6.6px]'>SEE</p>
        <p className='text-[70px] tracking-[6.6px]'>SHOP</p>
        <p className='text-[70px] tracking-[6.6px]'>WATCH</p>
        <p className='text-[70px] tracking-[6.6px]'>PERSONAL</p>
        <p className='text-[70px] tracking-[6.6px]'>AID</p>
      </div>
    </div>
  );
}

export default App;
