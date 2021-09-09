import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { FormContainer, FormInput, FormButton } from './SearchBox.element';

function SearchBox({ setClick, setData, username, setUsername }) {
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
    if (profileJson) {
      setData(profileJson);
    }
    setClick(true);
  };

  return (
    <FormContainer onSubmit={formSubmitHandler}>
      <IconContext.Provider value={{ color: '#0278fc', size: '30px' }}>
        <FaSearch />
      </IconContext.Provider>
      <FormInput
        type='text'
        placeholder='Search Github username....'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormButton type='submit'>Search</FormButton>
    </FormContainer>
  );
}

export default SearchBox;
