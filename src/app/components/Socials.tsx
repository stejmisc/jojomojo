import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export default function Socials() {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-10 mt-16">
            <Image src="/header.webp" width={70} height={70} alt="Header Image" />
            <div className='py-4 flex flex-wrap justify-center space-x-4 md:space-x-12'>
                <Link href="https://www.linkedin.com/in/jyotiishuklaa/" target='_blank'>
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn Logo"
                        width={22}
                        height={22}
                        priority
                    />
                </Link>
                <Link href="https://www.youtube.com/@thephoolishgirl" target='_blank'>
                    <Image
                        src="/youtube.svg"
                        alt="Youtube Logo"
                        width={22}
                        height={22}
                        priority
                    />
                </Link>
                <Link href="https://www.instagram.com/thephoolishgirl/" target='_blank'>
                    <Image
                        src="/instagram.svg"
                        alt="Instagram Logo"
                        width={22}
                        height={22}
                        priority
                    />
                </Link>
            </div>
            <Link className='italic font-serif pb-2 font-thin text-center text-black' href="mailto:thephoolishgirl@gmail.com" target='_blank'>
                thephoolishgirl@gmail.com
            </Link>
            <Link className='text-lg md:text-xl lg:text-2xl p-2' href="https://cultureqisse.substack.com/" target='_blank'>
                <Button className='font-bold' danger type="primary" icon={<RightOutlined />}>
                    Blog
                </Button>
            </Link>
        </div>
    );
}
