const News = () => {
  const newsImgs = [
    "news1.png",
    "news2.png",
    "news3.png",
    "news4.png",
    "news5.png",
    "news6.png",
  ];
  const blogImgs = [
    "blog1.png",
    "blog2.png",
    "blog3.png",
    "blog4.png",
    "blog5.png",
  ];
  return (
    <div className="flex h-max w-full items-start justify-center gap-6 py-10">
      <div>
        <div>
          <h1 className="mb-4 font-lato text-4xl font-black uppercase tracking-wider text-black">
            Latest Post
          </h1>
          <img src="/src/assets/Images/underline-img.png" alt="" />
        </div>
        <div className="mt-6 w-full">
          {newsImgs.map((img, index) => (
            <div
              key={index}
              className={`flex gap-5 py-5 ${
                index !== newsImgs.length - 1 ? "border-b-2 border-black" : ""
              }`}
            >
              <img src={`/src/assets/Images/${img}`} alt="" />
              <div className="flex flex-grow flex-col justify-between gap-2">
                <h1 className="font-lato text-3xl font-bold uppercase tracking-wider text-black">
                  Sed ut persiciatis de omnis iste
                  <br />
                  natus error sit voluptatem
                </h1>
                <div className="flex gap-2">
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Fashion
                  </div>
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Lifestyle
                  </div>
                  <p className="font-lato text-sm font-normal uppercase tracking-wider text-black">
                    03. June 2019
                  </p>
                </div>
                <p className="font-lato text-xl font-normal text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  <br />
                  do eiusmod tempor incididunt ut labore et dolore magna
                  <br />
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="mb-4 font-lato text-4xl font-black uppercase tracking-wider text-black">
            Interesting
          </h1>
          <img
            src="/src/assets/Images/underline-img-2.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="mt-6 w-full ">
          {blogImgs.map((img, index) => (
            <div
              key={index}
              className={`flex ${index === 0 ? "pb-8 pt-5" : "py-8"} gap-5 ${
                index !== blogImgs.length - 1 ? "border-b-2 border-black" : ""
              }`}
            >
              <img src={`/src/assets/Images/${img}`} alt="" />
              <div className="flex flex-grow flex-col justify-between gap-2">
                <h4 className="font-lato text-lg font-bold uppercase text-black">
                  Latest From the Web for
                  <br />
                  you
                </h4>
                <div className="norm flex h-5 w-[76px] items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs uppercase text-white">
                  Fashion
                </div>
                <p className="font-lato text-sm font-normal uppercase tracking-wider text-black">
                  03. June 2019
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h1 className="mb-4 font-lato text-4xl font-black uppercase tracking-wider text-black">
              Interesting
            </h1>
            <img
              src="/src/assets/Images/underline-img-2.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="relative mt-16">
            <div className="relative flex flex-col items-center justify-end">
              <img
                src="/src/assets/Images/feature-img.png"
                alt=""
                className="relative"
              />
              <div className="absolute flex w-11/12 translate-y-16 flex-col items-start justify-center gap-2 bg-white pl-5">
                <h1 className="font-lato text-lg font-bold uppercase text-black">
                  Upcoming Web Design
                  <br />
                  Confrences
                </h1>
                <div className="flex gap-2">
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Fashion
                  </div>
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Lifestyle
                  </div>
                  <p className="font-lato text-sm font-normal uppercase tracking-wider text-black">
                    03. June 2019
                  </p>
                </div>
                <p className="font-lato text-xl font-normal text-black">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="mt-24">
              <img src="/src/assets/Images/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
