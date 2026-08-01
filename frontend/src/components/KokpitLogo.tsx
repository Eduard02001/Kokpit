import kokpitLogoImage from '../assets/kokpit-logo.png'
import './KokpitLogo.css'

interface KokpitLogoProps {
  size?: 'md' | 'lg'
}

function KokpitLogo({ size = 'md' }: KokpitLogoProps) {
  return (
    <div className={`kokpit-logo kokpit-logo--${size}`}>
      <img src={kokpitLogoImage} alt="Kokpit" className="kokpit-logo-image" />
    </div>
  )
}

export default KokpitLogo
