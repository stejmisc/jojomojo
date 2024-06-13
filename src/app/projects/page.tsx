import { projects } from '../data/projects';
import ListCardView from '../components/ListCardView';

export default function Projects() {
    return (<ListCardView
        infoArray={projects}
        title={"Past Projects"}
        description={"My professional journey has been diverse. Some of the projects can be found below:"}
    />);
}
