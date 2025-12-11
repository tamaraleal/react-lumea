import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import lumea_logo from '../../assets/img/lumea_logo_branca.png'
import LinkCategoria from '../LinkCategoria/LinkCategoria';
import { categorias } from '../../data/LinkCategoria';
import type { LinkCategoriaProps } from '../../types/LinkCategoriaProps';
import { categoriasDireita } from '../../data/LinkCategoriaDireita';
import type { LinkCategoriaDireitaProps } from '../../types/LinkCategoriaDireitaProps';

export default function Header() {
    const [pesquisa, setPesquisa] = useState<string>("");
    const [fechado, setFechado] = useState(true);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!pesquisa.trim()) return; // ignora buscas vazias

        navigate(`/produtos/pesquisa?query=${encodeURIComponent(pesquisa)}`);
        setPesquisa("");
    }

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header>
            <Navbar expand="lg" className="container_cabecalho">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto conteudo-nav">
                        <div className="cab_col1">
                            <Nav.Item className="barra_pesquisa_container">
                                <input
                                    name='busca'
                                    type="text"
                                    placeholder="Pesquisar..."
                                    value={pesquisa} // Controla o valor do campo usando o estado pesquisa
                                    onChange={(e) => setPesquisa(e.target.value)} // atualiza o estado pesquisa toda vez que o usuário digita
                                    onKeyDown={handleKeyDown} // ativa a função quando uma tecla é pressionada no campo
                                    className={`form-control campo_pesquisa ${fechado ? "campo_pesquisa_f" : "campo_pesquisa_a"}`}
                                />

                                <button
                                    onClick={() => {
                                        setFechado(!fechado);
                                        handleSearch();
                                    }}
                                    className="btn-pesquisa"
                                    aria-label="Botão de Pesquisa"
                                >

                                    <svg className="icone_lupa" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 640">
                                        <path fill="currentColor"
                                            d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                                    </svg>
                                </button>
                            </Nav.Item>

                            <Nav.Item>
                                <nav className="container_esquerda container_palavras" id="container_esquerda">
                                    {
                                        categorias.map((c: LinkCategoriaProps) => (
                                            <LinkCategoria
                                                key={c.titulo}
                                                rota={c.rota}
                                                titulo={c.titulo}
                                            />
                                        ))
                                    }
                                </nav>
                            </Nav.Item>
                        </div>

                        <Link to={"/"}>
                            <img className="lumea_logo" src={lumea_logo} alt="Logo" />
                        </Link>


                        <div className="col_col3">
                            <Nav.Item className="icones_direita">
                                <Link to={"/produtos/cadastro"} title='Cadastrar Produtos'>
                                    <svg className="icone_user" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 640">
                                        <path
                                            d="M208 192C208 130.1 258.1 80 320 80C381.9 80 432 130.1 432 192C432 253.9 381.9 304 320 304C258.1 304 208 253.9 208 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM112 544C112 455.6 183.6 384 272 384L368 384C456.4 384 528 455.6 528 544L528 568C528 572.4 531.6 576 536 576C540.4 576 544 572.4 544 568L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 568C96 572.4 99.6 576 104 576C108.4 576 112 572.4 112 568L112 544z" />
                                    </svg>
                                </Link>
                            </Nav.Item>

                            <Nav.Item>
                                <nav className="container_direita container_palavras" id="container_direita">
                                    {
                                        categoriasDireita.map((c: LinkCategoriaDireitaProps) => (
                                            <LinkCategoria
                                                key={c.titulo}
                                                rota={c.rota}
                                                titulo={c.titulo}
                                            />
                                        ))
                                    }
                                </nav>
                            </Nav.Item>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
            </Navbar>
        </header >
    )
}