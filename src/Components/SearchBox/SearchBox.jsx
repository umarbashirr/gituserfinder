import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { FormContainer, FormInput, FormButton } from './SearchBox.element';

function SearchBox() {
  return (
    <FormContainer>
      <IconContext.Provider value={{ color: '#0278fc', size: '30px' }}>
        <FaSearch />
      </IconContext.Provider>
      <FormInput type='text' placeholder='Search Github username....' />
      <FormButton type='submit'>Search</FormButton>
    </FormContainer>
  );
}

export default SearchBox;
