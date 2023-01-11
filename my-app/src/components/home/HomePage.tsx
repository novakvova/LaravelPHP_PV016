import classNames from "classnames";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProductSearch } from "./store/types";

const HomePage = () => {
  const { list, count_pages, current_page, total } = useTypedSelector(
    (store) => store.product
  );
  const { GetProductList } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<IProductSearch>({
    name: searchParams.get("name") || "",
    page: searchParams.get("page") || 1,
  });

  useEffect(() => {
    //console.log("UseEffect Render app", search);
    GetProductList(search);
  }, [search]);
  const data = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  const buttons = [];
  for (let i = 1; i <= count_pages; i++) {
    buttons.push(i);
  }

  function filterNonNull(obj: IProductSearch) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v));
  }

  const pagination = buttons.map((page) => (
    <li key={page} className="page-item">
      <Link
        className={classNames("page-link", { active: current_page === page })}
        onClick={()=> setSearch({...search, page})}
        to={"?"+ qs.stringify(filterNonNull({...search, page}))}
      >
        {page}
      </Link>
    </li>
  ));

  return (
    <>
      {console.log("Render app", "One render")}
      <h1 className="text-center">Головна сторінка</h1>
      <h4>
        Усього продуктів <strong>{total}</strong>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      <nav>
        <ul className="pagination">{pagination}</ul>
      </nav>
    </>
  );
};

export default HomePage;
