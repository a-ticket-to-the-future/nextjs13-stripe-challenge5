import React from 'react'

const ProductDisplay = () => {
  return (
    <div className=' border-2 border-yellow-300 w-[600px] h-[480px] ml-[100px] my-2'>
        <div className=''>
          <form action="/create-checkout-session" method="POST">
            <input type='hidden' name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
            <button id="checkout-and-portal-button"
                    type="submit"
                    className=' border-2 border-purple-700 bg-purple-600 rounded-lg w-[150px] h-[50px] hover:scale-110 active:scale-95 mt-[100px]'
                    >
              Checkout
            </button>
          </form>
        </div>
      </div>
  )
}

export default ProductDisplay