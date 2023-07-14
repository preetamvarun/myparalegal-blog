import './App.css';
import vectorA from './Assets/vector-A.svg';
import vectorA1 from './Assets/VECTOR-A1.svg';
import vectorL from './Assets/vector-L.svg';
import vectorM from './Assets/vector-M.svg';
import vectorO from './Assets/vector-O.svg';
import vectorP from './Assets/vector-P.svg';
import Dialogue from './Components/Dialogue';

const dialogues = ['HEAR', 'LATEST', 'TOUR', 'SEE', 'SHOP', 'PERSONAL', 'AID'];

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
      <div
        className='text-white absolute right-0 bottom-0 origin-bottom-left -rotate-90 translate-x-full'
        style={{
          fontFamily: 'Anton, sans-serif',
          color: 'rgba(255,255,255,0.75)',
        }}>
        {dialogues.map((eachDialogue) => (
          <Dialogue msg={eachDialogue} />
        ))}
      </div>
    </div>
  );
}

export default App;
