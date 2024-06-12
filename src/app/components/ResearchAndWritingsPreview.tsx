import { Carousel, Row, Col, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";

const researchAndWritings = [
    {
        link: "https://www.unesco-ichcap.org/board.es?mid=a10301000000&bid=A105&act=view&list_no=13606&tag=&nPage=",
        title: "Craft initiatives by the Government of India",
        description: "The book contains ten good practices from five Asia-Pacific countries (Nepal, Vietnam, Uzbekistan, India, and Kyrgyzstan) selected through the 2022 international contest, Good Practices in Policies and Activities on Safeguarding and Promoting Traditional Crafts for Sustainable Development in Communities."
    },
    {
        link: "https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14103&tag=&nPage=1",
        title: "Basket weaving in Sonipat, Haryana",
        description: "Basket weaving is one of the longest surviving crafts in India particularly rural spaces. The article focuses on the craft of basket-making undertaken by the members of Self Help Groups, functioning in Tanda village of Rai block, Sonipat district, Haryana."
    },
    {
        link: "https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=20157&tag=&nPage=1",
        title: "Embroidery by Mutva Community, Kutch, Gujarat",
        description: "Kutch, located in the western state of Gujarat, India, is known for its rich craftsmanship. One such distinct group is the Mutva community, which has traveled from Sindh, Pakistan, and settled in the Banni region of Kutch almost 400 years ago."
    },
    {
        link: "https://ichcourier.unesco-ichcap.org/understanding-mata-ni-pachhedi-paintings-from-the-chitara-community/",
        title: "Textile craft from Amhedabad, Gujarat",
        description: "The article documents the work of the Chitara community, settled in Ahmedabad, Gujarat, known for their textile art form called Mata ni Pachedi."
    },
    {
        link: "",
        title: "Pastoral community in Kutch, Gujarat",
        description: "Kutch is the largest district located in the western state of Gujarat, India. It is home to several distinct traditional crafts, communities, and indigenous knowledge systems."
    },
    {
        link: "https://www.unesco-ichcap.org/board.es?mid=a10501020000&bid=A112&act=view&list_no=14090&tag=&nPage=1",
        title: "Festival of Onam, Kerala",
        description: "Onam is a major harvest festival celebrated in the Indian state of Kerala. The 10-day Onam festival marks the onset of the first month according to the Malayalam calendar called Chingam and generally occurs in the months of August or September every year in India."
    }
]



const ResearchAndWritingsPreview: React.FC = () => (
    <div className="w-full h-[600px] bg-amber-200 relative mb-8">
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
                    <Carousel arrows infinite >
                        {researchAndWritings.map((rar, index) => {
                            return (
                                <div key={rar?.link} className='text-center flex flex-col justify-center items-center p-16'>
                                    <Link className="font-semibold text-xl underline text-center" href={rar?.link} target='_blank'>{rar?.title}</Link>
                                    <div className="italic font-serif text-3xl text-gray-600 text-center my-4">{rar?.description}</div>
                                </div>
                            )
                        })}
                    </Carousel>
                </ConfigProvider>
            </Col>
        </Row>
    </div>
);

export default ResearchAndWritingsPreview;

