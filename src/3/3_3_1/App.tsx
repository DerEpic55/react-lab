// 3_3_1 Synced inputs 
/*
  Эти два входа являются независимыми. Сделайте их синхронизированными: редактирование одного входа должно обновить другой вход с тем же текстом, и наоборот.
*/

import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" text={text} handleChange={handleChange} />
      <Input label="Second input" text={text} handleChange={handleChange}  />
    </>
  );
}

function Input({ label, text, handleChange }: { label: string, text : string, handleChange : any }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}

