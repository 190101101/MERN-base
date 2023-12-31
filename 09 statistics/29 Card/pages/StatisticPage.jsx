import {Table, Card, Button} from 'antd';
import Header from '../components/header/Header';

const StatisticPage = () => {

  return (
    <>
      <Header/>
      <div className='px-6'>
        <h1 className="text-4xl font-bold text-center">Statistic</h1>
        <div className='statistic-section'>
          <h2 className='text-lg'>welcome <span className='text-green-700 font-bold text-xl'>admin</span></h2>

          {/*  */}
          <div className='statistic-cards grid grid-cols-4 my-10'>
            <div className='cart-item bg-gray-800 p-8 rounded-lg'>
              <div className='flex gap-x-2'>
                  <div className='rounded-full bg-white w-16 h-16 p-3'>
                    <img src="images/user.png"/>
                  </div>
                  <div className='text-white'>
                    <p className='mb-2 text-lg font-medium text-gray-600'>all users</p>
                    <p className='text-xl font-semibold text-gray-200'>6</p>
                  </div>
              </div>
            </div>
          </div>
          {/*  */}

        </div>
      </div>
    </>  
  )
}

export default StatisticPage