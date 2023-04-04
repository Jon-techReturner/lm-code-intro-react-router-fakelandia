import './header.css';
function Header(): JSX.Element {
    return (
        <>
            <header className='header__container'>
                <h1 className='header__title header__welcome'>Welcome to the Home of the </h1>
                <h2 className='header__title header__name'>FAKELANDIA  Justice Department </h2>
                
                <p className='header__subtitle'>
                    Here you can browse a list of recent misdemeanours committed by our citizens,or you can confess to your own misdemeanours.
                </p>
            </header>
        </>
    )
	
}

export default Header;
