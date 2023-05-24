import { useEffect } from "react";
import StockSummary from "../StockSummary";
import ScrollWrapper from "../Scroll";
import Buttons from "../Buttons";
import { setStocks } from "../../slice/stockSlice";
import { useSelector, useDispatch } from "react-redux";

const MainWrapper = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.Stocks);

  const fetchData = () => {
    return fetch("data.json")
      .then((response) => response.json())
      .then((data) => dispatch(setStocks(data)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {value.map((val) => (
        <div className="main_wrapper" key={val.id}>
          <StockSummary scrip={val.scrip} price={val.price} />
          <ScrollWrapper
            data={{
              quantity: val.quantity,
              avgCost: val.avg_cost,
              investedAmount: val.invested_amount,
              marketValue: val.market_value,
              portfolio: val.portfolio_percentage,
              unrealized: val.unrealized_PL,
              returnPercentage: val.return_percentage,
            }}
          />
          <Buttons />
        </div>
      ))}
    </>
  );
};

export default MainWrapper;
