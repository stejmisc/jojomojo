import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Socials() {
    return (
        <div className="w-full flex flex-col justify-center items-center mb-10">
            <Image src="/header.webp" width={100} height={100} alt="Header Image" />
            <div className='py-4 flex flex-wrap justify-center space-x-4 md:space-x-12'>
                <Link href="https://www.linkedin.com/in/jyotiishuklaa/" target='_blank'>
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn Logo"
                        width={30}
                        height={30}
                        priority
                    />
                </Link>
                <Link href="https://www.youtube.com/@thephoolishgirl" target='_blank'>
                    <Image
                        src="/youtube.svg"
                        alt="Youtube Logo"
                        width={30}
                        height={30}
                        priority
                    />
                </Link>
                <Link href="https://www.instagram.com/thephoolishgirl/" target='_blank'>
                    <Image
                        src="/instagram.svg"
                        alt="Instagram Logo"
                        width={30}
                        height={30}
                        priority
                    />
                </Link>
            </div>
            <Link className='italic font-serif text-xl md:text-2xl pb-2 font-thin text-center text-black' href="mailto:thephoolishgirl@gmail.com" target='_blank'>
                thephoolishgirl@gmail.com
            </Link>
            <Link className='text-xl md:text-2xl p-2' href="https://cultureqisse.substack.com/" target='_blank'>
                <Button className={'font-bold'} variant="contained" color='error' endIcon={<ArrowForwardIosIcon />}>
                    Blog
                </Button>
            </Link>
        </div>
    );
}
