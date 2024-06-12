import { Carousel, Row, Col, ConfigProvider } from "antd";

const testimonials = [
    {
        name: 'Pallavi Jain',
        country: 'India',
        description: `Jyoti has a very deep understanding of the history and culture of the place. She helped me a lot during my visit to Ahmedabad. She suggested me all the not to miss places and best places to eat.`
    },
    {
        name: 'Sarathy',
        country: 'United States',
        description: `She's one of the best. Was very professional and prompt in responding, easy conversatioalist, loads of knowledge on History and very passionate about Heritage. Highly recommend her.`
    },
]


const Testimonials: React.FC = () => (
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
                        {testimonials.map((testimonial, index) => {
                            return (
                                <div className='text-center flex flex-col justify-center items-center p-16'>
                                    <div className='text-lg md:text-2xl font-semibold mb-16'>{`${testimonial.name}, ${testimonial.country}`}</div>
                                    <div className='italic font-serif w-full text-base md:text-3xl p-8'>{testimonial.description}</div>
                                </div>
                            )
                        })}
                    </Carousel>
                </ConfigProvider>
            </Col>
        </Row>
    </div>
);

export default Testimonials;

