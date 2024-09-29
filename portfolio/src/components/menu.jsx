export default function Menu() {

  return (
    <nav className="main-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div>
          <a href="#">About Me</a>
        </div>
        <div>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div>
          <a href="/">Register</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <a href="/resume">Resume</a>
        </div>
      </section>
    </nav>
  );
}
