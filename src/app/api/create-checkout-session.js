export default async function handler(req,res){
    const stripe = require('stripe')('sk_test_51OJs18DeAQc450QQx1df7rQv298LhrEKKTiTXXL5pzC5Wx4HjTQvA7dt3BiD74S5GMBco6bmk0yxc3T1nu8fW47600DijjICiS');

    const YOUR_DOMAIN = "http://localhost:3000";

    const prices = await stripe.prices.list({
        lookup_keys:[req.body.lookup_key],
        expand:[data.product],
    });

    console.log(prices);


    const session = await stripe.checkout.sessions.create({
        billing_address_collection:'auto',
        line_items:[
            {
                price:prices.data[0].id,
                quantity:1,
            },
        ],
        mode:'subscription',
        success_url:`http://localhost:3000/success`,
        cancel_url:`http://localhost:3000/cancel`,
    });
    console.log(session);

    res.redirect(303,session.url);

}