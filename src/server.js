const stripe = require('stripe')('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS')
const express = require('express');
const app = express();

app.use('/app',express.static('components'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = 3001;
 
const YOUR_DOMAIN = 'http://localhost:3001';


app.post('/create-checkout-session', async (req,res) => {
    const prices = await stripe.prices.list({
        lookup_keys: [req.body.lookup_key],
        expand: [data.product],
    });

    console.log(prices);

    const session = await stripe.checkout.sessions.create({
        billing_address_collection:'auto',
        line_items:[
            {

            prices:prices.data[0].id,
            quantity:1,
        },
    ],

    mode:'subscription',
    success_url:`${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:`${YOUR_DOMAIN}/cancel`,

    });

    console.log(session);

    res.redirect(303,session.url);

});


app.listen(PORT,console.log("サーバーが起動しました"))