import './Produtos.css'
import { useEffect, useState } from 'react'
import { getSkinCare } from '../../services/SkinCareServices'
import type { SkinCare } from '../../types/SkinCare'
import CardProduto from '../../components/CardProduto/CardProduto'
import Carrossel from '../../components/Carrossel/Carrossel'
import Header from '../../components/Header/Header'

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
        <>
            <Header />
            <main>
                <Carrossel />
                <h1 className="acessivel">produtos de skin care</h1>
                <div className="titulo">

                    <span>Skin Care</span>
                    < hr />
                </div>

                <section className="cards">
                    {
                        skinCare.map((sk: SkinCare) => (
                            <CardProduto
                                key={sk.id}
                                nome={sk.nome}
                                descricao={sk.descricao}
                                preco={sk.preco}
                                imagem={sk.imagens[0] ?? ""}
                                peso={sk.peso}
                            />
                        ))
                    }
                </section>

            </main>
        </>
    )
}