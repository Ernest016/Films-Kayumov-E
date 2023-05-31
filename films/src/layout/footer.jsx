function Footer(){
  return <footer className='page-footer accent-1 orange'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
          
        <a href="#!" className="grey-text text-lighten-4 right">
          Repository  
        </a>
        <a href="#!" className="grey-text text-lighten-4 left">Kayumov E.</a>
      </div>
    </div>
  </footer>
}
export { Footer };