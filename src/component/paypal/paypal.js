import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const Paypal = ({ sum, transactionSuccess, transactionCancel, transactionError }) => {
    const onSuccess = (payment) => {
       transactionSuccess(payment)
    }
    const onCancel = (data) => {
        transactionCancel(data)
    }
    const onError = (err) => {
       transactionError(err)
    }
    let env = 'sandbox'; 
    let currency = 'USD'; 
    let total = sum; 
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
    const client = {
        sandbox: 'AS3fi5SheJtk8x2XrLnZ40F_rBsTZfLuSG9O-pjB52FjFE9q22Q3WA2b8ghQTe2fxPzZCto86E5g9ldU',
        production: 'YOUR-PRODUCTION-APP-ID',
    }
    return (
        <React.Fragment>
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total} onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{ color: "gold", size: "responsive" }}
            />
        </React.Fragment>
    )
}

export default Paypal