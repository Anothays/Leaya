import { Grid } from '@mui/material'
import Image from 'next/image'

const about = () => {
  return (
    <Grid
      container
      style={{ justifyContent: 'center', color: 'white' }}
      alignItems="center"
      justifyContent="center"
      className="p-0 py-10 m-0 overflow-hidden"
    >
      <Grid item sm={12} md={6} className="relative">
        <Image
          className="relative -translate-x-24"
          src="/assets/about.png"
          alt="illustration d'une personne utilisant l'application Leaya sur smartphone"
          width={1000}
          height={676}
          style={{ borderRadius: '97px' }}
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        className="relative flex-col text-justify p-10 md:text-2xl "
      >
        <h1
          style={{
            position: 'relative',
            color: 'white',
            fontSize: '48px',
            fontWeight: '600',
            padding: '2rem',
            lineHeight: '3.5rem',
            textAlign: 'center',
          }}
        >
          A PROPOS DE NOUS
        </h1>
        <p>
          <span style={{ color: '#B18F40' }}>LEAYA ELITE</span> est une
          application dédiée aux rencontres et au réseautage en Afrique. Elle
          vise à connecter les communautés et les amoureux du continent à
          travers sa plateforme mobile.
          <span style={{ color: '#B18F40' }}>
            {' '}
            L'Afrique, en tant que terre d'opportunités, est au cœur de notre
            initiative.
          </span>
        </p>
        <br />
        <p>
          Notre mission fondamentale est de connecter les Africains entre eux.
          L’application veut garantir une expérience de rencontre exclusive,
          sécurisée et raffinée. Nos objectifs tendent à faciliter les
          rencontres, créer des connexions significatives et durables entre des
          individus partageant des intérêts similaires.
        </p>
        <br />
        <p>
          <span style={{ color: '#B18F40' }}>
            LEAYA Elite aspire à devenir l'application de réseautage de
            référence sur le continent africain.
          </span>
        </p>
      </Grid>
    </Grid>
  )
}

export default about
