import { FollowArea } from "../FollowArea/FollowArea";
import { InfoArea } from "../InfoArea/InfoArea";
import { SearchBar } from "../SearchBar/SearchBar";
import { SidebarArea } from "./styles";

export function Sidebar(){

  return(
    <SidebarArea>
      <SearchBar />
      <InfoArea />
      <FollowArea />
    </SidebarArea> 
  )
}