import './Footer.css'
import whatsapp from '../../assets/Whatsapp.svg'
import insta from '../../assets/Instagram.svg'

export default function Footer() {
    return (
        <footer>
            <section className='rodape'>
                <div>
                    <p>Luméa: sua essência em equilíbrio, onde saúde, bem-estar e beleza se encontram para transformar
                        vidas.</p>
                </div>

                <div className="redes_sociais">
                    <img className="whatsapp" src={whatsapp} alt="icone do whatsapp" />
                    <img className="insta" src={insta} alt="icone do instagram" />
                </div>

            </section>
        </footer>
    )
}
