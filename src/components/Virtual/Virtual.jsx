import React from 'react'
import './Virtual.css'
import shade from '../../assets/shade.png'
import before from '../../assets/before.png'
import after from '../../assets/after.png'
import ReactCompareImage from 'react-compare-image'
const Virtual = () => {
  return (
    <section>
        <div className="container virtual-container">
            <div className="left-virtual">
                <span>Virtual Try-On</span>
                <span>Never Buy The Weong Shade Again!</span>
                <span>Try Now!</span>
                <img src={shade} alt="" />
            </div>
            <div className="rigth-virtual">
                <div className="virtual-wrapper">
                <ReactCompareImage leftImage={before} rightImage={after} />

                </div>
            </div>
        </div>
    </section>
  )
}

export default Virtual
