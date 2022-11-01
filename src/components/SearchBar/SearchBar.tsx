import { SearchBarField } from "./styles";
import searchIcon from '../../../src/assets/icons/search.svg';

export function SearchBar(){
  return(
    <SearchBarField>
      <img src={searchIcon} alt="" />
      <input type="text" placeholder="Search Twiiter" />
    </SearchBarField>
  )
}