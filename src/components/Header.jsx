import logo from '../assets/logo.png';
// import classes from './Header.module.css';
import { styled } from 'styled-components';

const HeaderStyled = styled.header`
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
  }

  & img {
      object-fit: contain;
      margin-bottom: 2rem;
      width: 11rem;
      height: 11rem;
  }

  & h1 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.4em;
      text-align: center;
      text-transform: uppercase;
      color: #9a3412;
      font-family: 'Pacifico', cursive;
      margin: 0;
  }

  .paragraph {
      text-align: center;
      color: #a39191;
      margin: 0;
  }

  @media (min-width: 768px) {
      & {
          margin-bottom: 4rem;
      }

      & h1 {
          font-size: 2.25rem;
      }
  }
`
// con '&' si identifica lo styled component , in questo caso 'HEADER'
export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain'/>
      <h1 className='font-title text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800'>ReactArt</h1>
      <p
      // className={classes.paragraph}
        className='text-stone-500'
      >A community of artists and art-lovers.</p>

      {/* la classe paragrapf importata come una stringa contenuta nell'oggetto classes, è applicata solo
      al componente header, da qui deriva la scope del css (CSS MODULES) */}
    </header>
  );
}
