const Header = ({ title }) => {
    return (
        <div className='header-container mb-3'>
            <h1 className='text-4xl mb-1 font-black'>{title}</h1>
            <div className='header-underline h-2 w-10 rounded-lg bg-blue-500'></div>
        </div>
    )
}
export default Header;