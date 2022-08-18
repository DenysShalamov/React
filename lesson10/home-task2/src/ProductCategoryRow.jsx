import React from 'react';
// отображает категории
const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
