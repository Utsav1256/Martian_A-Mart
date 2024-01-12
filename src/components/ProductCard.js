const ProductCard = () => {
  return (
    <div className="bg-white w-52 h-1/6 rounded-2xl overflow-hidden m-3">
      <img
        className="w-52"
        src="https://www.jiomart.com/images/product/original/491997700/apple-iphone-13-128-gb-starlight-digital-o491997700-p590798551-0-202208221207.jpeg?im=Resize=(360,360)"
      />
      <div className="w-full p-2 ">
        <h3 className="text-grey">Apple Iphone</h3>
        <h4 className="text-grey">52000</h4>
      </div>
    </div>
  );
};
export default ProductCard;
