import banner_1 from '../../assets/img/skin_care_banner_resized.png'
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

<main>
    <section className={banner_1}></section>
    <section className="container"></section>
    <h1 className="acessivel">produtos de skin care</h1>
    <div className="titulo">
        <span>Skin Care</span>
        < hr />
    </div>

    <section className="cards">
        <div className="card">
            <img src={tonico_facial} alt="Produto Tônico Facial Luméa" />
            <h2>Tônico Facial</h2>
            <p>Controle do brilho, remove as impurezas e minimiza o excesso de brilho do rosto.</p>
        </div>

        <div className="card">
            <img src={hidratante_facial} alt="Produto Hidratante Facial Luméa" />
            <h2>Hidratante Facial</h2>
            <p>Oferece uma solução abrangente para manter a sua pele saudável.</p>
        </div>

        <div className="card">
            <img src={protetor_solar} alt="Produto Protetor Solar Luméa" />
            <h2>Protetor Solar</h2>
            <p>Oferece alta proteção ao sol. Toque seco de rápida absorção. </p>
        </div>

        <div className="card">
            <img src={esfoliante_corporal} alt="Produto Esfoliante Corporal Luméa" />
            <h2>Esfoliante Corporal</h2>
            <p>Body Scrub, esfolia e hidrata, removendo profundamente as impurezas da pele</p>
        </div>

        <div className="card">
            <img src={oleo_corporal} alt="Produto Óleo Corporal Luméa" />
            <h2>Óleo Corporal</h2>
            <p>Body Oil realça o brilho natural da pele, deixando-a macia e hidratada o dia todo.</p>
        </div>

        <div className="card">
            <img src={sabonete_corporal} alt="Produto Sabonete Corporal Luméa" />
            <h2>Sabonete Corporal </h2>
            <p>Suavité limpa mas sem agredir a pele, removendo as células mortas.</p>
        </div>

        <div className="card">
            <img src={mascara_facial} alt="Produto Mascara Facial Luméa" />
            <h2>Mascara Facial</h2>
            <p>Radiance Glow foi desenvolvida para revitalizar e iluminar a pele em poucos minutos.</p>
        </div>

        <div className="card">
            <img src={agua_micelar} alt="Produto Água Micelar Luméa" />
            <h2>Água Micelar</h2>
            <p>Micellar Water remove impurezas, maquiagem e oleosidade sem agredir a pele.</p>
        </div>

        <div className="card">
            <img className="creme" src={antissinais_reparador}
                alt="Produto Antissinais Reparador" />
            <h2>Antissinais Reparador</h2>
            <p>Anti-Wrinkle Cream foi desenvolvido para reparar, hidratar e restaurar a firmeza da pele.
            </p>
        </div>
    </section>

</main>