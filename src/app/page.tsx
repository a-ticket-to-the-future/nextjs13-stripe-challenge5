import Image from 'next/image'
import ProductDisplay from "./components/ProductDisplay/page"

export default function Home() {
  return (
    <div className=' border-2 border-blue-700 w-[1400px] h-[600px] m-5 '>
      <div className=' border-2 border-green-500 w-[1200px] h-[580px] ml-[100px] my-2'>
        <div className='border-2 border-pink-500 w-[1000px] h-[560px] ml-[100px] my-2 '>
          <div className=' border-2 border-cyan-400 w-[800px] h-[540px] ml-[100px] my-2 text-center'>
            <div>
              テスト画面
              <div>
                <ProductDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
