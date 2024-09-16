import Link from 'next/link'
import Icons from './Icons';
interface TitleBarProps {
    title: string;
    subTitle: string;
    subTitlePath: string;
    titlePath: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, subTitle, subTitlePath,titlePath }) => {
    return (
        <div className='bg-white-rock'>
            <div className='container xl:max-w-[1188px] py-3 md:py-[14.5px] flex items-center'>
                <Link href={titlePath} className='font-bold text-sm md:text-base !leading-170 text-holly'>{title}</Link>
                <Icons icon="rightArrow" className="mx-4 mg:px-6 lg:mx-7" />
                <Link href={subTitlePath} className='font-normal text-sm md:text-base !leading-170 text-holly'>{subTitle}</Link>
            </div>
        </div>
    )
}

export default TitleBar
