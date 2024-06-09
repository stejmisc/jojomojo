import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

export default function Socials() {
    return (<div className="w-full flex flex-col justify-center items-center mb-10">
        <Image src="/header.webp" width={150} height={150} alt="Header Image" />
        <div className='pt-8 flex space-x-12'>
            <Link href="https://www.linkedin.com/in/jyotiishuklaa/" target='_blank'>
                <Image
                    src="/linkedin.svg"
                    alt="LinkedIn Logo"
                    width={40}
                    height={40}
                    priority
                />
            </Link>
            <Link href="https://www.youtube.com/@thephoolishgirl" target='_blank'>
                <Image
                    src="/youtube.svg"
                    alt="Youtube Logo"
                    width={40}
                    height={40}
                    priority
                />
            </Link>
            <Link href="https://www.instagram.com/thephoolishgirl/" target='_blank'>
                <Image
                    src="/instagram.svg"
                    alt="Instagram Logo"
                    width={40}
                    height={40}
                    priority
                />
            </Link>
        </div>
        <Link className='italic font-IBMPlex text-2xl pb-2' href={"mailto:thephoolishgirl@gmail.com"} target='_blank' >thephoolishgirl@gmail.com</Link>
        <Link className='italic font-IBMPlex text-2xl p-2' href={"https://cultureqisse.substack.com/"} target='_blank' >
            <Button variant="outlined"
                endIcon={<BookIcon />}
            >Blog</Button>
        </Link>
    </div>
    )
}
