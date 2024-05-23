const Authors = () => {
  const cardImgs = ["card1.png", "card2.png", "card3.png"];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-[#f1f1f1] py-8">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="font-lato text-4xl font-black uppercase text-black">
          Advice from our dedicated authores
        </h1>
        <img src="/src/assets/Images/underline-img-3.png" alt="" />
        <p className="font-lato text-xl font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis
          <br />
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute .
        </p>
      </div>
      <div className="flex w-full items-center justify-center gap-6">
        {cardImgs.map((img, index) => (
          <div key={index} className="bg-white">
            <img src={`/src/assets/Images/${img}`} alt="" />
            <div className="flex flex-col gap-3 p-4 ">
              <h1 className="font-lato text-lg font-bold uppercase text-black">
                Upcoming Web Design
                <br />
                Confrences
              </h1>
              <div className="flex justify-between gap-2">
                <p className="font-lato text-sm font-normal uppercase tracking-wider text-black">
                  03. June 2019
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Fashion
                  </div>
                  <div className="flex h-5 w-20 items-center justify-center rounded-xl bg-[#ce0393] font-lato text-xs font-normal uppercase text-white">
                    Lifestyle
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
