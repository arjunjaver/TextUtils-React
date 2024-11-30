import React, { useState } from 'react'

export default function About(props) {

  return (
    <>
          <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-3'>About Us</h1>
          <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button className="accordion-button" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About TextUtils
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}}>
            TextUtils is a simple yet powerful tool designed to help you manage and manipulate your text effortlessly. Whether you need to quickly convert your text to uppercase or lowercase, count the number of words or characters, or just preview the text as you type, TextUtils is the perfect solution for all your text-related needs. It provides an intuitive and user-friendly interface, making text editing tasks faster and more efficient.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Features of TextUtils
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}}>
            TextUtils is packed with features that simplify working with text. You can convert your text to uppercase or lowercase with just a click, helping you format your text for any situation. The word and character counters give you real-time information, so you can track your progress without leaving the app. Additionally, the live preview feature ensures that you always know exactly how your text will appear before finalizing it. Whether for writing, editing, or casual text manipulation, TextUtils has you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Why Choose TextUtils?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#363535':"white", color: props.mode==='dark'?'white':'black'}}>
            TextUtils was created with simplicity and functionality in mind. It's a lightweight app that doesn't overwhelm you with unnecessary features, but still offers all the essentials you need for managing text. Whether you're working on a short message or a long essay, TextUtils provides quick and accurate results. No sign-ups, no unnecessary steps—just efficient and effective text editing at your fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
