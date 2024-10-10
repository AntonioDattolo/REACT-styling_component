import logo from '../assets/logo.png';
import classes from './Header.module.css';
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>

      {/* la classe paragrapf importata come una stringa contenuta nell'oggetto classes, è applicata solo
      al componente header, da qui deriva la scope del css (CSS MODULES) */}
    </header>
  );
}
