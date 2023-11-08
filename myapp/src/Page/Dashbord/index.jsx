import React from 'react'
import './Dashbord.css'
import Button from '../../Components/Button/Button'
import Game from '../../img/Game.png'
import Heart from '../../img/Heart.png'
import Icon from '../../img/Icon.png'
import Bag from '../../img/Bag.png'
import LineChart from '../../Components/LineChart/LineChart'
import CircleChart from '../../Components/CircleChart/CircleChart'
import Table from '../../Components/Table/Table'
import  Menu  from '../../img/Menu.png'
import Iphone from '../../img/iphone.png'
import Nike from '../../img/nike.png'
export default function Dashbord() {
  return (
    <div className='dashbord-container'>
     <div className="d-header">  
          <div className="d-header-text">
          <h2>Dashbord</h2>
          </div>
            <div className="d-header-button">
            <button>10-06-2021</button>
            <button>10-10-2021</button>
            </div>
            </div>
      <div className="d-button">
      <Button img={Heart} txt1={'178+'} txt2={'Save Products'}/>
      <Button img={Game} txt1={'20+'} txt2={'Stock products'}/>
      <Button img={Bag} txt1={'190+'} txt2={'Sale Products'}/>
      <Button img={Icon} txt1={'12+'} txt2={'Job Application'}/>
      </div>
      <div className="chart">
      <div className="right-chart"><LineChart/></div>
        <div className="left-chart" ><CircleChart/>
         <div className="text-chart">
         <span>80%</span><br />
            <span>Trnsition</span>  
          </div>      
        </div>
      
      </div>
      <div className="product">
         <div className="left-product"><Table/></div>
         <div className="right-product">
          <div className="header-right-product">
              <span>Top Selling Product</span>
              <img src={Menu} alt="" />
              </div>
              <div className="product-card">
                <img src={Nike} alt="" />
                <div className="product-text">
                  <span>NIKE Shoes Black Pattern</span>
                  <span>87$</span>
                </div>
              </div>
              <div className="product-card">
                <img src={Iphone} alt="" />
                <div className="product-text">
                  <span>Iphone 13 pro-max </span>
                  <span>1000$</span>
                </div>
              </div>

         </div>
         </div>
         
     
    </div>
  )
}
