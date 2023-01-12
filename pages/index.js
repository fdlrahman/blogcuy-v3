import Format from "../src/layout/format";
import Section1 from "../src/components/section1";
import Section2 from "../src/components/section2";
import Section3 from "../src/components/section3";
import Section4 from "../src/components/section4";

export default function Home() {
  return (
    <>
      <Format>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
      </Format>
    </>
  );
}
