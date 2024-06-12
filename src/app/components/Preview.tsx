import { Carousel, Row, Col, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";

type Info = {
    link: string;
    title: string;
    description: string;
    imageSrc: string;
};

type Props = {
    infoArray: Info[];
    title: string;
};

const Preview: React.FC<Props> = ({ infoArray, title }) => (
    <div className="w-full bg-amber-200 relative mb-8 text-center">
        <div className="text-3xl text-serif pt-8">{title}</div>
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
                    <Carousel slidesToShow={3} arrows infinite autoplay autoplaySpeed={2000} >
                        {infoArray.map((info, index) => {
                            return (
                                <div key={info?.imageSrc} className="flex w-full h-full justify-center items-center p-16">
                                    <div className="flex flex-col  justify-center items-center">
                                        <div className="relative w-36 h-36">
                                        <Image src={info?.imageSrc} layout="fill" objectFit="cover" className='rounded-full' alt="Project 1" />
                                        </div>
                                        <Link className="font-semibold text-xl underline text-center" style={{ textDecoration: 'none' }} href={info?.link} target='_blank'>{info?.title}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </ConfigProvider>
            </Col>
        </Row>
    </div >
);

export default Preview;

