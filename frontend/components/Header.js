const Header = ({ title }) => {
    return (
        <div className='header-container my-4'>
            <h1 className='text-8xl mb-4 font-black'>{title}</h1>
            <div className='header-underline h-1 w-24 rounded-lg bg-blue-500'></div>
        </div>
    )
}
export default Header;