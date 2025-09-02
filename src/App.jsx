import { HashRouter, Route, Routes, Link } from "react-router-dom"
import "./App.css"

import App1 from "./Pages/App1"
import App2 from "./Pages/App2"
import App3 from "./Pages/App3"
import App4 from "./Pages/App4"
import App5 from "./Pages/App5"
import App6 from "./Pages/App6"
import App7 from "./Pages/App7"
import App8 from "./Pages/App8"
import App9 from "./Pages/App9"
import App10 from "./Pages/App10"
import App11 from "./Pages/App11"
import App12 from "./Pages/App12"
import App13 from "./Pages/App13"
import App14 from "./Pages/App14"
import App15 from "./Pages/App15"
import App16 from "./Pages/App16"
import App17 from "./Pages/App17"
import App18 from "./Pages/App18"
import App19 from "./Pages/App19"
import App20 from "./Pages/App20"
import App21 from "./Pages/App21"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/" element={<><h2>Navigation Menu</h2>
              <ul>
                <li><Link to="/app1">Go to App 1</Link></li>
                <li><Link to="/app2">Go to App 2</Link></li>
                <li><Link to="/app3">Go to App 3</Link></li>
                <li><Link to="/app4">Go to App 4</Link></li>
                <li><Link to="/app5">Go to App 5</Link></li>
                <li><Link to="/app6">Go to App 6</Link></li>
                <li><Link to="/app7">Go to App 7</Link></li>
                <li><Link to="/app8">Go to App 8</Link></li>
                <li><Link to="/app9">Go to App 9</Link></li>
                <li><Link to="/app10">Go to App 10</Link></li>
                <li><Link to="/app11">Go to App 11</Link></li>
                <li><Link to="/app12">Go to App 12</Link></li>
                <li><Link to="/app13">Go to App 13</Link></li>
                <li><Link to="/app14">Go to App 14</Link></li>
                <li><Link to="/app15">Go to App 15</Link></li>
                <li><Link to="/app16">Go to App 16</Link></li>
                <li><Link to="/app17">Go to App 17</Link></li>
                <li><Link to="/app18">Go to App 18</Link></li>
                <li><Link to="/app19">Go to App 19</Link></li>
                <li><Link to="/app20">Go to App 20</Link></li>
                <li><Link to="/app21">Go to App 21</Link></li>
              </ul>
            </>}/>
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/app4" element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
        <Route path="/app6" element={<App6 />} />
        <Route path="/app7" element={<App7 />} />
        <Route path="/app8" element={<App8 />} />
        <Route path="/app9" element={<App9 />} />
        <Route path="/app10" element={<App10 />} />
        <Route path="/app11" element={<App11 />} />
        <Route path="/app12" element={<App12 />} />
        <Route path="/app13" element={<App13 />} />
        <Route path="/app14" element={<App14 />} />
        <Route path="/app15" element={<App15 />} />
        <Route path="/app16" element={<App16 />} />
        <Route path="/app17" element={<App17 />} />
        <Route path="/app18" element={<App18 />} />
        <Route path="/app19" element={<App19 />} />
        <Route path="/app20" element={<App20 />} />
        <Route path="/app21" element={<App21 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
