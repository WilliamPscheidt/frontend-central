import "./style/global.css"

import TopContainer from "./components/containers/topbarcontainer";
import SidebarContainer from "./components/containers/sidebarcontainer";
import ContentContainer from "./components/containers/contentcontainer";

import TopMenu from "./components/menus/top";

function App() {
  return (
    <div>
      <TopContainer>
        <TopMenu />
      </TopContainer>
      <SidebarContainer>
        <h2>Sidebar</h2>
      </SidebarContainer>
      <ContentContainer>
        <h2>Content</h2>
      </ContentContainer>
    </div>
  );
}

export default App;
