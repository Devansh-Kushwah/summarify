import logo from '../assets/logo.png'



export default function nav() {
  return (
    <header className="absolute inset-x-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
              <span className="sr-only">Summarify</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
          </div>
        </nav>
      </header>
  )
}



