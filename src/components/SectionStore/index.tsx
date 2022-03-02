import styles from "./styles.module.scss";
import Link from "next/link";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import BannerTriauto from "../../assets/triauto-banner.png";
import LogoTriauto from "../../assets/triauto-logo.svg";
import BannerGiovanni from "../../assets/giovanni-banner.png";
import LogoGiovanni from "../../assets/giovanni-logo.svg";
import BannerJmw from "../../assets/jmk-banner.png";
import LogoJmw from "../../assets/jmk-logo.svg";
import BannerHonda from "../../assets/honda-banner.png";
import LogoHonda from "../../assets/honda-logo.svg";
import BannerMauricio from "../../assets/mauricio-banner.png";
import LogoMauricio from "../../assets/mauricio-logo.svg";
import {CardStore} from "../CardStore";

export function SectionStore() {
    const data = [
        {
            id: "1",
            name: "Ford Triauto",
            banner: BannerTriauto.src,
            avatar: LogoTriauto.src,
        },
        {
            id: "2",
            name: "Giovanni Veículos",
            banner: BannerGiovanni.src,
            avatar: LogoGiovanni.src,
        },
        {
            id: "3",
            name: "Jmk veículos",
            banner: BannerJmw.src,
            avatar: LogoJmw.src,
        },
        {
            id: "4",
            name: "Formula R Honda",
            banner: BannerHonda.src,
            avatar: LogoHonda.src,
        },
        {
            id: "5",
            name: "Maurício Motos",
            banner: BannerMauricio.src,
            avatar: LogoMauricio.src,
        },
        {
            id: "6",
            name: "Ford Triauto",
            banner: BannerTriauto.src,
            avatar: LogoTriauto.src,
        },
    ]
    return (
        <div className={styles.section_store}>
            <div className="d-flex justify-content-md-center" style={{paddingLeft: 12}}>
                <h4 className={styles.title}>Confira as <span>lojas</span> perto de você</h4>
            </div>
            <div className="section_vehicles_popular w-100 d-flex justify-content-center gap-4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {data?.map(item => (
                            <SwiperSlide id={styles.swiper_slide} key={item.id}>
                                <Link href={`/store/${item.id}`}>
                                    <a>
                                        <CardStore data={item}/>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    );
}