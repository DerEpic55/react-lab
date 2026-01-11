// 4_2_2 Focus the search field
/*
  Сделайте так, чтобы нажатие на кнопку "Поиск" наводило фокус на поле.
*/

import { useRef } from "react";

export default function Page() {
  const ref = useRef(null);

  return (
    <>
      <nav>
        <button onClick={() => {
            ref.current.focus();
        }}>Search</button>
      </nav>
      <input ref={ref}
        placeholder="Looking for something?"
      />
    </>
  );
}

