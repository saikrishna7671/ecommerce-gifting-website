import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'
const Orders = () => {
  return (
    <Layout title={'Orders'}>
        
        <div className="container-fluid m-3 p-3 dashboard">
        <div className='row'>
        <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
            <h1>
        All Orders
        </h1>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Orders