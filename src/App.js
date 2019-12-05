import React, { useState } from 'react';
import { Emoji } from 'emoji-mart';
import EmojiPicker from './EmojiPicker';

function App() {
  const [emojiType, setEmojiType] = useState(null);
  const [emojiList, setEmojiList] = useState([]);

  const onSelect = emoji => {
    console.log({ emoji });
    setEmojiList([...emojiList, emoji]);
    setEmojiType(null);
  };
  return (
    <>
      <button onClick={() => setEmojiType('apple')}>Apple</button>
      <button onClick={() => setEmojiType('google')}>Google</button>
      <button onClick={() => setEmojiType('twitter')}>Twitter</button>
      <button onClick={() => setEmojiType('emojione')}>emojione</button>
      <button onClick={() => setEmojiType('messenger')}>messenger</button>
      {emojiType && <EmojiPicker onSelect={onSelect} set={emojiType} />}
      {emojiList.length ? (
        <p>
          {emojiList.map(({ id, set }, i) => (
            <Emoji emoji={id} size={24} key={i} set={set} />
          ))}
        </p>
      ) : null}
    </>
  );
}

export default App;
