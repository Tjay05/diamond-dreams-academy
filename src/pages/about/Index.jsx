import tiger from "../../assets/image/tiger.jpeg";

const AboutMe = () => {
  return (
    <div className="rule">
      <section className="my-8 md:flex justify-between flex-row-reverse">
        <img className=" rounded-2xl md:w-[30%]" src={tiger} alt="Emma Collins" />
        <div className="text-black md:w-[65%]">
          <h2 className="font-bold my-3 text-3xl font-[rokkitt] md:text-4xl">My name is Emma Collins and I am your Diamond Mentor.</h2>
          <p className="my-4 font-[Open_Sans] md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eveniet aliquam, enim adipisci qui voluptate nemo fugiat illum, repellendus hic odit blanditiis ab maiores exercitationem? Nostrum omnis aspernatur accusamus.
          </p>
        </div>
      </section>
      <section className="text-black my-4 font-[Open_Sans] md:text-lg">
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime minus atque blanditiis excepturi aliquid! Error nihil architecto eum illum laboriosam fugit nisi possimus aperiam reiciendis incidunt id porro magnam commodi, voluptatem eius nobis suscipit asperiores odio enim rem similique a quas? Eius ipsam ut facere voluptatem corporis hic nemo sint neque quos, architecto animi, libero vel ad aliquam mollitia rem soluta expedita quas dicta quaerat eum voluptates. Consequatur, quis a, fugiat ipsam dolorum sapiente accusantium, eos minus culpa ratione nostrum repellat debitis tenetur illum distinctio corrupti? Odio nemo explicabo amet provident a, nihil, animi esse ipsam est consectetur optio dolores?
        </p>
      </section>
    </div>
  );
}
 
export default AboutMe;