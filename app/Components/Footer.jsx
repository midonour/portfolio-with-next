function Footer() {
    return (
        <footer className='flex flex-col md:flex-row md:px-15 text-[#64748B] pb-10 px-5  w-full justify-between items-center '>
            <p className='text-xs md:text-lg'>&copy; {new Date().getFullYear()} MOHAMED NOUR. All rights reserved.</p>
            <div className="social-links flex text-xs md:text-lg gap-2 md:gap-2">
                <a href="https://www.facebook.com/mohamednour.alkhtib" target="_blank" rel="noopener noreferrer"> FaceBook </a>
                <a href="https://www.linkedin.com/in/mohamed-nour-2996102a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/midonour" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </footer>
    )
}

export default Footer
