import display from '../../assets/Images/Display.jpg'

function Header() {
  return (
    <div>
           <div
             className="relative h-16 sm:h-24 md:h-32 lg:h-48 xl:h-64 2xl:h-96"
            style={{ backgroundImage: `url(${display})`, backgroundSize: '100em', height: '50em', backgroundRepeat: 'no-repeat' }}
            />

    </div>
  )
}

export default Header