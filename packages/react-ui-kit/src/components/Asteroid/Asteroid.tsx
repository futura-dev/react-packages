interface AsteroidProps {
  text: string;
}

export const Asteroid = ({ text }: AsteroidProps) => {
  return (
    <div className="w-fit h-8 md:h-10 bg-futura-green rounded-3xl flex items-center justify-center p-4 md:p-5">
      <p className="text-xs md:text-base 2xl:text-xl font-semibold">{text}</p>
    </div>
  );
};
