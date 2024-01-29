import logo from '../components/react-logo.png'

export default function Navbar() {
    return (
        <>
            <div className='container'>
                <div className='nav-img'>
                    <img src={logo}></img>  
                    <h3>
                        ReactFacts
                    </h3>
                </div> 
                <h4>
                    React Course - Project 1
                </h4>
            </div>
        </>
    )
}