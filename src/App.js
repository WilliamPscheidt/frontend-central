import "./style/global.css"

import TopContainer from "./components/containers/topbarcontainer";
import SidebarContainer from "./components/containers/sidebarcontainer";
import ContentContainer from "./components/containers/contentcontainer";

import TopMenu from "./components/menus/top";
import SidebarMenu from "./components/menus/sidebar";

import TotalLigacoes from "./components/charts/TotalLigacoes";
import Avaliacoes from "./components/charts/Avaliacoes";

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
          <div style={{"width": 500, "height": 300, "display": "flex"}}>
            <TotalLigacoes />
            <TotalLigacoes />
            <Avaliacoes />
          </div>
          
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
