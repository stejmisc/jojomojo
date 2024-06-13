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
    <div className="w-full bg-amber-200 relative my-8 text-center">
        <div className="text-3xl font-serif pt-8 font-bold">{title}</div>
        <Row align="middle" justify="center" style={{ height: '100%' }}>
            <Col xs={24} md={20} lg={16} className="m-8">
                <ConfigProvider
                    theme={{
                        components: {
                            Carousel: {
                                arrowSize: 48,
                            }
                        },
                    }}
                >
                    <Carousel
                        slidesToShow={3}
                        responsive={[
                            { breakpoint: 480, settings: { slidesToShow: 1 } },
                            { breakpoint: 768, settings: { slidesToShow: 2 } },
                            { breakpoint: 1024, settings: { slidesToShow: 3 } },
                        ]}
                        arrows
                        infinite
                        autoplay
                        autoplaySpeed={2000}
                    >
                        {infoArray.map((info, index) => (
                            <div key={index} className="flex w-full h-full justify-center items-center p-4 md:p-8">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="relative w-24 h-24 md:w-36 md:h-36">
                                        <Image
                                            src={info.imageSrc}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                            alt={info.title}
                                            unoptimized
                                        />
                                    </div>
                                    <Link className="font-semibold text-lg md:text-xl underline text-center mt-8" style={{ textDecoration: 'none' }} href={info.link} target='_blank'>
                                        {info.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </ConfigProvider>
            </Col>
        </Row>
    </div>
);

export default Preview;
