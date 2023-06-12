import { useSelector } from 'react-redux';

const Categories = () => {
  const { products } = useSelector((state) => state.global);
  console.log(products);

  return (
    <>
      <h2>single category</h2>
      <h2>single category</h2>
      <h2>single category</h2>
    </>
  );
};
export default Categories;
