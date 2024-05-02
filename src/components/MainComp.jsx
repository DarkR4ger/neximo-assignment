import LeftMainComp from "./LeftMainComp";
import MiddleMainComp from "./MiddleMainComp";

const MainComp = () => {
  return (
    <main className="min-h-screen px-6 mt-[65px] flex">
      <LeftMainComp />
      <MiddleMainComp />
    </main>
  )
}

export default MainComp;
