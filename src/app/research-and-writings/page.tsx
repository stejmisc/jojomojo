import ListCardView from '../components/ListCardView';
import { researchAndWritings } from '../data/researchAndWritings';

export default function ResearchAndWritings() {
    return (<ListCardView
        infoArray={researchAndWritings}
        title={"Research & Writings"}
        description={"I write about Indian cultural heritage and knowledge across areas like food systems, crafts, textiles, and heritage practices. Some of the writings can be seen below"}
    />
    );
}
