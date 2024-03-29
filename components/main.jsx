import logo from '../components/react-logo.png'

export default function Main() {
    return (
        <>
            <div className="container-main">
                <img src={logo} alt="" />
                <div className='main'>
                    <h1>Fun facts about React</h1>
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan White</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprises apps, including mobile apps</li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}