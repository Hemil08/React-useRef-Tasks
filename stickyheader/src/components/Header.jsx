import React,{useRef,useLayoutEffect, useEffect, use} from 'react'
import '../App.css';


const Header = () => {

    const stickyHeader = useRef()

    useLayoutEffect(()=>{

        const header = stickyHeader.current
        let fixedTop = header.getBoundingClientRect().top

        const stickyHeaderEvent = () =>{
            if (window.scrollY > fixedTop){
                header.classList.add("sticky-header")
            }
            else{
                header.classList.remove("sticky-header")
            }
        }
        window.addEventListener("scroll",stickyHeaderEvent)
    },[])

    return (
        <div className='container'>

            <h1>React Sticky Header</h1>
            
            <div className="header" id="header" ref={stickyHeader}>
                    <h2>Header</h2>
            </div>

            <div className="content">   
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. bieu sticky react header Magna etiam tempor orci eu
                  lobortis elementum nibh. Nam libero justo laoreet sit amet cursus sit
                  amet. Dignissim diam quis enim lobortis scelerisque fermentum dui.
                  Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vita.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh react sticky header cras pulvinar mattis.
                  Consectetur a erat nam at lectus urna duis. Magna etiam tempor orci 
                  eu lobortis elementum nibh. Nam libero justo laoreet sit amet cursus
                  sit amet. Dignissim diam quis enim lobortis scelerisque fermentum dui.
                  Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus
                  commodo viverra maecenas. Non blandit massa enim nec dui nunc. Aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum. Cursus
                  euismod quis viverra nibh cras pulvinar mattis. Consectetur a erat nam
                  at lectus urna duis. Magna etiam tempor orci eu lobortis elementum
                  nibh. Nam libero justo laoreet sit amet cursus sit amet. Dignissim
                  diam quis enim lobortis scelerisque fermentum dui. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae nunc.
                </p>
            </div>
        </div>
    );

}

export default Header