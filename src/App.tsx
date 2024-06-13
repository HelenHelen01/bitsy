import { PageHeader } from "./layouts/PageHeader";
import { CategoryButtons} from "../components/CategoryButtons";


export default function App() {
  return (
    <div className="max-h-screen flex flex-col">  
          <PageHeader/>
          <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">hello mellow
          <div>Sidebar</div>
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryButtons/>
          </div>
          <div>bodysticked</div>
          <div>footer</div>
    </div>
  </div>
  )
}