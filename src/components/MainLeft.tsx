import React from 'react'
import Typography from '@mui/material/Typography'
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import './MainLeft.css'

const MainLeft = () => {
    return (
        <div className='container'>
            <Typography className="h1" variant="h1">Travaux de rénovation. Prix correct.</Typography>
            <Typography className="h2" variant="h2">Appellez-nous maintenant !</Typography>
            {/* <Typography className="accent" variant='h2'>(+33) 625 625 625</Typography> */}
            <p>Notre <span>équipe</span> pourrait se rendre <span>disponible</span> facilement pour vous en <span>Ile-de-France</span> et les régions voisines.</p>
            {/* <p className="secondary">Utilisez le formulaire à droite pour nous envoyer un message ou demander un devis.</p> */}
            <div className="contact-info">
            <p className='info'>
                <PhoneIcon className='icon' />
                (+33) 625 625 625
            </p>
            <p className='info'>
                <MailOutlineIcon className='icon' />
                contact@falco.com
            </p>
        </div>
        </div>
    )
}

export default MainLeft