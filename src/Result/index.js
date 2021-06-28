import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <p className="container__result">
        {result !== undefined && (
            <>
                <strong>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;
