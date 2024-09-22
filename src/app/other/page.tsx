import CardInfo from "@/components/ui/CardInfo";
import styles from "./index.module.css";
import Lace from "@/components/ui/Lace";
import CardColorRandom from "@/components/ui/CardColorRandom";
import Banner from "@/components/ui/Banner";
import TzPageProgress from "@/components/TzPageProgress";
import TzSwiper from "@/components/TzSwiper";
import SwiperBanner from "@/components/ui/SwiperBanner";
export default function Other() {
  return (
    <div className={`${styles.customFont} `}>
      <div className="relative">
        <Banner></Banner>
        <Lace></Lace>
      </div>

      <CardInfo
        imgUrl={
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        }
        avatar={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
        title={"Card title"}
        description={"This is the description"}
      />
      <br />
      <CardColorRandom
        imgUrl={undefined}
        avatar={undefined}
        title={undefined}
        description={undefined}
      />

      <TzSwiper></TzSwiper>
      <SwiperBanner />
      <TzPageProgress />
    </div>
  );
}
