import Image from 'next/image';
import Link from 'next/link';

type ListCardViewInfo = {
    link: string;
    title: string;
    description: string;
    imageSrc: string;
};

type Props = {
    infoArray: ListCardViewInfo[];
    title: string;
    description: string;
};

const ListCardView: React.FC<Props> = ({ infoArray, title, description }) => (
    <div className="flex flex-col w-full font-serif items-center">
        <div className='w-full lg:w-3/5 flex flex-col justify-center items-center'>
            <div className="text-4xl m-2">{title}</div>
            <div className="text-xl text-gray-600 text-center">{description}</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-16 items-start'>
                {infoArray.map((info, index) => (<div key={info?.title} className='flex flex-col justify-center items-center'>
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
                    <Link className="font-semibold text-xl underline text-center" href={info?.link} target='_blank'>{info?.title}</Link>
                    <div className="w-full text-xl text-gray-600 text-center my-4">{info?.description}</div>
                </div>
                ))}
            </div>
        </div>
    </div>
);

export default ListCardView;