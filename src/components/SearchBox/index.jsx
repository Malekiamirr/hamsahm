import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
function SearchBox() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <form
        style={{ boxShadow: ' 0px 1px 8px 0px #00000030' }}
        className="flex items-center gap-2 rounded-full overflow-hidden px-1 h-[30px]  w-[127px]"
      >
        <div className="min-w-4 min-h-4">
          <BiSearch className="text-[#989898] w-4 h-4" />
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="جستجو"
          className="text-[10px] outline-none h-full"
        />
      </form>
    </>
  );
}

export default SearchBox;
