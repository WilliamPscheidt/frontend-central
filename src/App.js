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
          <div className="dashboard-grid">
            <div class="chart chart-1">
              <div class="chart_internal">
                <div class="chart_informations">
                  <span className="sub-text">Total de Ligações</span>
                  <span className="main-text">5.987</span>
                </div>
                <div class="chart_graphy">
                  <TotalLigacoes />
                </div>
              </div>
            </div>
            <div class="chart chart-2">
              <div class="chart_internal">
                <div class="chart_informations">
                  <span className="sub-text">Ligações mais Longas</span>
                  <span className="main-text">05 de Março às 19:00</span>
                </div>
                <div class="chart_graphy">
                  <TotalLigacoes />
                </div>
              </div>
            </div>
            <div class="chart chart-3">
              <div class="chart_internal">
                <div class="chart_informations">
                  <span className="sub-text">Tempo Médio</span>
                  <span className="main-text">Média</span>
                </div>
                <div class="chart_graphy">
                  <TotalLigacoes />
                </div>
              </div>
            </div>
            <div class="chart chart-4">
              <div class="chart_internal">
                <div class="chart_informations">
                  <span className="sub-text">Média de Avaliações</span>
                  <span className="main-text">Ótimo</span>
                </div>
                <div class="chart_graphy">
                  <Avaliacoes />
                </div>
              </div>
            </div>
            <div class="chart chart-5">
              <div class="chart_internal">
                <div class="chart_informations">
                  <span className="sub-text">Pausas</span>
                  <span className="main-text">Almoço & Improdutiva</span>
                </div>
                <div class="chart_graphy">
                  <TotalLigacoes />
                </div>
              </div>
            </div>
            {/* <TotalLigacoes /> <Avaliacoes />*/}
          </div>
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
