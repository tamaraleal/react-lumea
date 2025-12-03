import './Produtos.css'
import { useEffect, useState } from 'react'
import { getSkinCare } from '../../services/SkinCareServices'
import type { SkinCare } from '../../types/SkinCare'
import CardProduto from '../../components/CardProduto/CardProduto'
import Carrossel from '../../components/Carrossel/Carrossel'
import Header from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function Produtos() {
    const [skinCare, setSkinCare] = useState<SkinCare[]>([]);
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fetchSkincare = async () => {
        try {
            const dados = await getSkinCare();
            // console.log("Lista de Produtos vinda da API: ", dados);
            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(sk =>
                    sk.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    sk.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    sk.categorias.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
                );
                setSkinCare(dados_filtrados);
            } else
                setSkinCare(dados);
        } catch (error) {
            console.error("Erro ao executar getSkinCare: ", error);
        }
    }

    useEffect(() => {
        fetchSkincare();
        console.log("Termo pesquisado: ", termo_pesquisado);
    }, [termo_pesquisado])

    return (
        <>
            <Header />
            <main>
                <Carrossel />
                <h1 className="acessivel">produtos de skin care</h1>
                <div className="titulo">

                    <span>
                        {
                            termo_pesquisado ? `Resultados para: ${termo_pesquisado}` : "Skin Care"
                        }
                    </span>
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
                            />
                        ))
                    }
                </section>

            </main>
            <Footer />
        </>
    )
}