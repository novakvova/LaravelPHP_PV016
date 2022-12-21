import { Link } from "react-router-dom";

const NoMatchPage = () => {
  return (
    <>
      <div>
        <h2>Тут нічого не видно!</h2>
        <p>
          <Link to="/">Перейдіть на головну сторінку</Link>
        </p>
      </div>
    </>
  );
};
export default NoMatchPage;
