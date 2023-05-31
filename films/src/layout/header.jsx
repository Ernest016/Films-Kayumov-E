function Header() {
  return (
    <nav className='deep accent-1 orange'>
      <div className="container">
        <div className='nav-wrapper'>
          <a href="!#" сlassName='brand-logo'>React Movies</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href="!#">Repository</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export { Header };