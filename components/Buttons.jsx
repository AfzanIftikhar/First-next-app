"use client"


// There are two types of rendering -> Server side rendering and client side renedering, when a client is interacting with website like clicking a button, then we need to use client side rendering, in Next js we should avoid using client side, we should make the component only Client side and should not make the whole page client side.


function Buttons() {
  return (
    <div>
        <button
        onClick ={() => alert("Button Clicked")}
        >
            Click me
        </button>
    </div>
  )
}

export default Buttons
