import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBullhorn, faHandshake, faQuestion, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {ButtonUser} from "../ButtonUser";
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.scss";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";

export function NavbarFixed() {
    const router = useRouter();
    const [routeActive, setRouteActive] = useState('');

    useEffect(() => {
        let array_routes = router.route.split('/', 5);
        array_routes[2] === 'anunciar' || array_routes[2] === 'editar' ? setRouteActive('anunciar') : setRouteActive(array_routes[array_routes.length - 1]);
    }, [router]);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <img src={Logo.src} alt=""/>
                        </a>
                    </Link>
                </div>
                <div className="d-flex align-items-center gap-5">
                    <ul className={styles.list_links + " d-flex align-items-center gap-5 mb-0 h-100"}>
                        <li>
                            <Link href="/">
                                <a>Comprar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Vender</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Serviços</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Ajuda</a>
                            </Link>
                        </li>
                    </ul>
                    <ButtonUser/>
                    <button className={styles.btn_primary} onClick={() => router.push('/cadastrar-anuncio')}>
                        Anunciar veículo
                    </button>
                </div>
            </nav>
        </header>
    )
}