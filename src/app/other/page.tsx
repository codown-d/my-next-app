import InfoCard from "@/components/ui/InfoCard";
import styles from "./index.module.css";
import Lace from "@/components/ui/Lace";
import CardColorRandom from "@/components/ui/CardColorRandom";
export default function Other() {
  return (
    <div className={`${styles.customFont} `}>
      <Lace></Lace>
      <InfoCard
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
    </div>
  );
}
