export default function TextSlider({ title }) {
  return (
    <div className="w-[200%] flex absolute left-0 animate">
      <div className="flex gap-96 w-[200%] relative -z-0 left-0">
        {title.map((tit) => {
          return (
            <h2
              className="text-7xl text-purple-600 select-none transition-all hover:scale-125"
              key={tit}
            >
              {tit}
            </h2>
          );
        })}
      </div>
      <div className="flex gap-96 w-[200%] relative -z-0 right-0">
        {title.map((tit) => {
          return (
            <h2
              className="text-7xl text-purple-600 select-none transition-all hover:scale-125"
              key={tit}
            >
              {tit}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
