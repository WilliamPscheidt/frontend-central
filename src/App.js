import "./style/global.css"

import TopContainer from "./components/containers/topbarcontainer";
import SidebarContainer from "./components/containers/sidebarcontainer";
import ContentContainer from "./components/containers/contentcontainer";

import TopMenu from "./components/menus/top";
import SidebarMenu from "./components/menus/sidebar";

function App() {
  return (
    <div>
      <TopContainer>
        <TopMenu />
      </TopContainer>
      <div className="root_page">
        <SidebarContainer>
          <SidebarMenu />
        </SidebarContainer>
        <ContentContainer>
          
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
