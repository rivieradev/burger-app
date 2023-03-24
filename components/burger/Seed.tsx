type Props = {
  className: string;
};

const Seed = ({className}: Props) => {
  return (
    <div className={`${className} rounded-full h-[5px] w-[10px] md:h-[10px] md:w-[20px] absolute shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] bg-gradient-to-r from-gray-50 to-gray-100`}></div>
  );
};

export default Seed;