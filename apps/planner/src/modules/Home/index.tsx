import { Badge } from "../../components/Badge";
import { Tag } from "../../components/Tag";
import { ThemeProvider } from "./provider/ThemeProvider";

export function Home() {

  return <div className="text-white">
    <ThemeProvider>
      <Tag />
      <Badge />
    </ThemeProvider>
  </div>
}
