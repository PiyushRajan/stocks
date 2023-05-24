import React from "react";
import InvestmentSummary from "../InvestmentSummary";
import MarketValue from "../MarketValue";
import Unrealized from "../Unrealized";

const ScrollWrapper = ({ data }) => {
  return (
    <>
      <div className="scroll">
        <InvestmentSummary
          quantity={data.quantity}
          avgCost={data.avgCost}
          investedAmount={data.investedAmount}
        />
        <MarketValue
          marketValue={data.marketValue}
          portfolio={data.portfolio}
        />
        <Unrealized
          unrealized_PL={data.unrealized}
          returnPercentage={data.returnPercentage}
        />
      </div>
    </>
  );
};

export default ScrollWrapper;
