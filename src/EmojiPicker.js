import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

function EmojiPicker({ onSelect, set }) {
  console.log(set);
  return (
    <div>
      <Picker
        onSelect={emoji => onSelect({ ...emoji, set })}
        set={set}
        i18n={{
          categories: {
            search: '検索結果',
            flags: 'Flags',
            custom: 'Custom',
          },
        }}
      />
    </div>
  );
}

export default EmojiPicker;
