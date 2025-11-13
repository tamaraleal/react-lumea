import banner_1 from '../../assets/img/banner_largo_1.png'
import banner_2 from '../../assets/img/banner_largo_2.png'
import banner_3 from '../../assets/img/banner_largo_3.png'
import tonico_facial from '../../assets/img/Tónico Facial Luméa em Detalhe.png'
import hidratante_facial from '../../assets/img/Hidratante Facial Luméa em Detalhe.png'
import protetor_solar from '../../assets/img/ChatGPT Image 25_09_2025, 14_17_51.png'
import esfoliante_corporal from '../../assets/img/Frasco Luméa Body Scrub em destaque.png'
import oleo_corporal from '../../assets/img/ChatGPT Image 25_09_2025, 14_44_40.png'
import sabonete_corporal from '../../assets/img/ChatGPT Image 25_09_2025, 14_13_00.png'
import mascara_facial from '../../assets/img/ChatGPT Image 25_09_2025, 14_57_03.png'
import agua_micelar from '../../assets/img/ChatGPT Image 25_09_2025, 15_03_44.png'
import antissinais_reparador from '../../assets/img/Creme Anti-Rugas Luméa em Foco.png'
import './Produtos.css'
import { useEffect, useState } from 'react'
import { getSkinCare } from '../../services/SkinCareServices'
import type { SkinCare } from '../../types/SkinCare'

export default function Produtos() {

    const [skinCare, setSkinCare] = useState<SkinCare[]>([]);

    const fetchSkincare = async () => {
        try {
            const dados = await getSkinCare();
            console.log("Lista de Produtos vinda da API: ", dados);
            setSkinCare(dados);
        } catch (error) {
            console.error("Erro ao executar getSkinCare: ", error);
        }
    }

    useEffect(() => {
        fetchSkincare();
    }, [])

    return (
        <main>
            {/* <section className={banner_1}></section>
            <section className="container"></section> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={banner_3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className="acessivel">produtos de skin care</h1>
            <div className="titulo">

                <span>Skin Care</span>
                < hr />
            </div>

            <section className="cards">
                {
                    skinCare.map((sk: SkinCare) => (
                        <div className="card_produto">
                            <img src={`http://localhost:3000/static/${sk.imagens[0]}`} alt="" />
                            <h2>{sk.nome}</h2>
                            <p>{sk.descricao}</p>
                        </div>
                    )

                    )
                }
            </section>

        </main>
    )
}