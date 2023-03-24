import Seed from './Seed';

const TopBread = () => {
  return (
      <div className="relative mx-auto rounded-t-full md:w-[400px] md:h-[60px] shadow-[inset_8px_8px_4px_rgba(107,51,2,0.3)] bg-gradient-to-r from-amber-400 to-amber-500 w-[200px] h-[30px]">
        <Seed className='left-5 top-2 md:left-10 md:top-5 rotate-45'/>
        <Seed className='left-10 top-3 md:left-20 md:top-7 -rotate-45'/>
        <Seed className='left-20 top-3 md:left-40 md:top-7'/>
        <Seed className='left-36 top-3 md:left-60 md:top-4 rotate-90'/>        
        <Seed className='left-40 top-3 md:left-80 md:top-5 -rotate-45'/>
      </div>
  );
};

export default TopBread;