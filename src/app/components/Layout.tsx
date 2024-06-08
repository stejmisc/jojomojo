import Header from './Header'
import Socials from './Socials'

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Socials />
        </>
    )
}