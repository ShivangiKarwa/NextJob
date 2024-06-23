import logo from '../Assets/logo.png';

const headerList = ['About Us', 'Features', 'Contact Us']

export default function Header() {
    return (
        <nav className="flex w-full h-full min-h-full bg-headerBlue">
            <div className="flex items-center justify-between p-2 w-full">
                <a href='test'  className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="logo" className='w-32 ml-8'/>
                </a>
           
                <div className="md:block text-white text-opacity-90 mr-8 " id="navbar-default">
                    <ul className='font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0'>
                        {headerList.map((item) => <li key={item}>
                            <a href='test' className='block py-2 px-3 transition-all duration-300 hover:text-blue-200 hover:underline underline-offset-4 '>
                            {item}
                            </a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

