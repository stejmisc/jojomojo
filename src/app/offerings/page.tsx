import { offerings } from '../data/offerings';
import ListCardView from '../components/ListCardView';

export default function Offerings() {
    return (<ListCardView
        infoArray={offerings}
        title={"Heritage Offerings"}
        description={"Indian heritage offers immersive experiences in areas such as traditional food, crafts, textiles, unique places, spirituality, and many more. Dive deeper to plan a meaningful travel to India!"}
    />);
}
