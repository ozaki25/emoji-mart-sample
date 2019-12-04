import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Emoji, Picker } from 'emoji-mart';

function App() {
  const [emojiList, setEmojiList] = useState([]);
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(true);
  const onSelect = emoji => {
    console.log({ emoji });
    setEmojiList([...emojiList, emoji]);
    setOpen(false);
  };
  return (
    <>
      <button onClick={onClick}>Open</button>
      {open && (
        <div>
          <Picker onSelect={onSelect} />
        </div>
      )}
      {emojiList.length ? (
        <p>
          {emojiList.map(({ id }, i) => (
            <Emoji emoji={id} size={24} key={i} />
          ))}
        </p>
      ) : null}
    </>
  );
}

export default App;
