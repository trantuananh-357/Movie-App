import config from "../config";
import Home from "../page/Home/home";
import Movies from "../page/Movies/Movies";
import Tvseries from "../page/Tvseries/Tvseries";
import DetailMovie from "../components/DetailMovie";
const publicRoutes = [
    {path: config.routes.home, component: <Home /> },
    {path: config.routes.movie, component: <Movies /> },
    {path: config.routes.tvseries, component: <Tvseries /> },
    {path: config.routes.detail, component: <DetailMovie id ="OdDdcf8iWkI"/>},


]

export default publicRoutes