import { Carousel, Row, Col, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        link: 'https://cultureqisse.substack.com/p/2024-wellbeing-journey-food-is-medicine',
        title: 'Indic researcher (Ancient Indian Knowledge Systems)',
        description: `As an Indic researcher, I have been studying ancient Indian texts including Ayurveda, Yogic traditions, Cultural traditions around art.`
    },
    {
        link: 'https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14103&tag=&nPage=1',
        title: `Chief Minister's Good Governance Associate (CMGGA), Haryana`,
        description: `As a CMGGA, I worked on 15+ large-scale programs in Haryana's Sonipat district working closely with the district administration.`
    },
    {
        link: 'https://cultureqisse.substack.com/p/2019-a-walk-through-the-city-ahmedabad',
        title: 'Heritage Walk Leader, Ahmedabad & Delhi',
        description: `I have enjoyed curating heritage walks in the world heritage city- Ahmedabad to various historical sites.`
    },
    {
        link: 'https://cultureqisse.substack.com/p/2019-a-heritage-walk-in-the-city',
        title: 'Heritage Crafts Curator, Ahmedabad',
        description: `As a heritage manager, I have worked with numerous crafts communities and designed programs for the sustenance of traditional crafts.`
    },
    {
        link: 'https://cultureqisse.substack.com/p/2017-learning-from-change-a-year',
        title: 'Social Worker, Germany',
        description: `I have been a recipient of an International Exchange Program in Germany. I had the opportunity to support educational interventions for refugee groups.`
    },
    {
        link: 'https://cultureqisse.substack.com/p/2014-a-circle-of-learning-smile-in',
        title: 'Rural Volunteer, Rajasthan',
        description: `A rural internship in Jhiri village, Rajasthan has been a turning point in my life. Many surprises and learning, it has been an enriching experience.`
    },
]


const ProjectsPreview: React.FC = () => (
    <div className="w-full h-[400px] bg-amber-200 relative mb-8">
        <Row align="middle" justify="center" style={{ height: '100%' }}>
            <Col className="m-8 w-3/5">
                <ConfigProvider
                    theme={{
                        components: {
                            Carousel: {
                                arrowSize: 48,
                            }
                        },
                    }}
                >
                    <Carousel arrows infinite autoplay autoplaySpeed={2000} >
                        {projects.map((project, index) => {
                            return (
                                <div key={project?.link} className='text-center flex flex-col justify-center items-center p-8'>
                                    <Link className="font-semibold text-xl underline text-center" href={project?.link} target='_blank'>{project?.title}</Link>
                                    <div className="italic font-serif text-3xl text-gray-600 text-center my-4">{project?.description}</div>
                                </div>
                            )
                        })}
                    </Carousel>
                </ConfigProvider>
            </Col>
        </Row>
    </div>
);

export default ProjectsPreview;

