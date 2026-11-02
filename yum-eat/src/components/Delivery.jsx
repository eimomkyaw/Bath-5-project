import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1520px mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672075/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p className="text-justify pe-20 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            temporibus unde quisquam, totam molestias quidem dignissimos,
            maiores a dolore, quas rerum numquam optio hic? Accusantium ea
            mollitia cumque recusandae consequuntur? Quas tempora voluptatum
            saepe dolores perferendis neque beatae exercitationem facilis
            provident modi nostrum, itaque fugit nam! Mollitia odit alias
            tenetur natus magnam, cumque consequatur quod laudantium. Molestiae
            possimus numquam maiores. Eum enim sunt ipsum ea vero. Illum
            molestiae doloribus dignissimos mollitia, non architecto, itaque
            esse facere vitae accusantium assumenda eveniet consequatur
            voluptate, aut deleniti suscipit ratione iusto ex ducimus!
            Accusamus.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
