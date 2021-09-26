const TopBar = () => {
  return ( 
    <header className="topbar">
      <section className="container flex f-space-between py-1">
          <article className="flex">
              <a href="/" className="btn">
                   Home 
                </a>
              <div className='divider-y' />
              <a href="/contact" className="btn">
                   Contact
              </a>
              <div className='divider-y' />
              <a href="/About" className="btn">
                   About 
              </a>
              <div className='divider-y' />
              <a href="/faq" className="btn">
                   FAQ 
              </a>
          </article>
          <article>
            <span className="text-white"><ion-icon name="call-outline" size="30px"></ion-icon> Services Client <strong>0661 656 994</strong></span>
          </article>
      </section>
  </header>
  );
};

export default TopBar;