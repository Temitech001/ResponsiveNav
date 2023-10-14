import image from 'C:/Users/Administrator/Desktop/Reactproject/figmamediaqeury/src/assets/undraw_Traveling_yhxq (1).png';
const Herosection = () => {
  return (
    <section className="md:flex flex-row-reverse">
      <div className="mx-10">
        <img src={image} />
      </div>
      <div className=" justify-center items-center  text-center flex flex-col gap-4  mx-10  md:text-left md:items-start">
        <h1
          className="text-2xl font-semibold md:text-3xl
        "
        >
          Link Less
        </h1>
        <p>
          Introducing short link-the fast and easy way to shorthen long url to
          compact link tht are sharable and trackable
        </p>
        <button className="rounded-full w-fit px-3 py-2 bg-blue-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Herosection;
