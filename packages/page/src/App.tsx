import { useCounter } from "lib";
import { Icon } from "@iconify/react";

function App() {
  const { count, setCount } = useCounter();
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
      <button
        className="flex items-center justify-center text-2xl"
        onClick={() => setCount(count + 1)}>
        <Icon
          icon="mdi:plus"
          className=" text-gray-500"
        />
        {count}
      </button>
    </section>
  );
}

export default App;
