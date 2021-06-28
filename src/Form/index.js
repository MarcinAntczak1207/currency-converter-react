import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = ({ calculateResult }) => {
    const [currency, setCurrency] = useState(currencies[0].shortcut);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    Dane
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota w zł*:
                        </span>
                        <input
                            value={amount}
                            onChange={(event) => setAmount(event.target.value)}
                            placeholder="Wpisz kwotę"
                            className="form__field"
                            required
                            type="number"
                            min="0"
                            step="0.01"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Waluta:
                        </span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.shortcut}
                                    value={currency.shortcut}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
        </form>
    );
};

export default Form;