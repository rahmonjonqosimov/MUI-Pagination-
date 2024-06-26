import React, { useState } from "react";
import "./index.scss";
import star from "../../assets/images/star.svg";
import { useGetProductsQuery } from "../../context/api/productApi";
import PaginationComponent from "../pagination";
import Loading from "../loading";
import SelectOption from "../select";

const Products = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("select") || 6
  );
  const { data, isFetching } = useGetProductsQuery({
    limit: perPageCount,
    page: page,
  });

  const paginationCount = Math.ceil(data?.data?.count / perPageCount);

  const productItem = data?.data?.products?.map((product) => (
    <div key={product?.id} className="product__card">
      <div className="product__image">
        <img
          src={
            product.urls.length
              ? product.urls[0]
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK7-n-r_w_qCEIjsnu8VXMBamUkSmLUr9Eg&s"
          }
          alt={product?.title}
        />
      </div>
      <div className="product__about">
        <h3 className="product__title">{product?.title.slice(0, 50)}</h3>
        <img src={star} alt="Star" />
        <div className="price">
          <del>${product?.oldPrice}</del>
          <span>${product?.price}</span>
        </div>
      </div>
    </div>
  ));
  console.log(page);
  return (
    <section id="products">
      <div className="products__title">
        <p>Find your favourite smart watch.</p>
        <h2>Our Latest Products</h2>
      </div>
      {isFetching ? (
        <Loading count={perPageCount} />
      ) : (
        <>
          <div className="container">
            <div className="product__wrapper">{productItem}</div>
          </div>
        </>
      )}

      <div className="select__pagination">
        <PaginationComponent
          page={page}
          setPage={setPage}
          paginationCount={paginationCount}
        />
        <SelectOption
          setPage={setPage}
          page={page}
          perPageCount={perPageCount}
          setPerPageCount={setPerPageCount}
        />
      </div>
    </section>
  );
};

export default Products;
