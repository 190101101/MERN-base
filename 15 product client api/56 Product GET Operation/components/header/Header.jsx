import React from 'react'
import {Link} from 'react-router-dom';

import { Input, Badge } from 'antd';
import { 
  SearchOutlined, 
  HomeOutlined, 
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between item-center gap-10">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold md-text-4xl">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input 
            size="large" 
            placeholder="search" 
            prefix={<SearchOutlined />} 
            className="rounded-full max-w-[800px]"
          />
        <br />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <HomeOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge count={3} offset={[0,-1]} className="md:flex hidden">
            <Link to="/cart" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="md:text-2xl"/>
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
          <Link to="/bills" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <CopyOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Bills</span>
          </Link>
          <Link to="/customers" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <UserOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Users</span>
          </Link>
          <Link to="/statistic" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <BarChartOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Stats</span>
          </Link>
          <Link className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <LogoutOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">log out</span>
          </Link>
        </div>
        <Badge count={3} offset={[0,-1]} className="md:hidden flex">
            <Link to="/cart" className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="text-2xl"/>
                <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
      </header>
    </div>
  )
}

export default Header;