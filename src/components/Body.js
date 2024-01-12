// "https://www.jiomart.com/cms/topdeals/get_all"

import ProductCard from "./ProductCard";

const Body = () => {
  return (
    <div className="body w-full bg-slate-500 ">
      <div className="product_container p-5 flex justify-evenly flex-wrap ">
        {/* ProductCard */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Body;
