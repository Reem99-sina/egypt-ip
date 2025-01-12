'use client';

import { FC } from 'react';
// import { useTranslation } from '@/translations/clients';
import { FooterCopyright } from './footer-copyright.component';
// import Link from 'next/link';
// import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "@/icon"
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import { TextInput } from '@/components/shared/form/text-input.component';

interface Props {
  home?: boolean;
}

// const social = [
//   {
//     Svg: FaYoutube,
//     alt: 'youtube',
//     linkTo: '#',
//   },
//   {
//     Svg: FaInstagram,
//     alt: 'instagram',
//     linkTo: '#',
//   },
//   {
//     Svg: FaTwitter,
//     alt: 'twitter',
//     linkTo: '#',
//   },
//   {
//     Svg: FaFacebookSquare,
//     alt: 'facebook',
//     linkTo: '#',
//   },
// ];

export const Footer: FC<Props> = () => {
  // const { t } = useTranslation();
  // const pathname = usePathname();
  // const isTopFooterShown = !pathname.includes('account');

  // if (pathname === '/ar' && !home) {
  //   return null;
  // }

  return (
    <>
      {/* {isTopFooterShown && (
        <footer
          className={`dark:bg-bg-dark mt-7 flex  flex-col items-center bg-footerColor py-5 text-white ${
            home ? 'min-h-full' : ''
          }`}
        >
          <div className={clsx('container container-mobile ')}>
            <Link href={'/'}>
              <FullWhiteLogoIcon />
              logo
            </Link>

            <div className='mt-4 flex flex-col items-start text-sm sm:flex-row'>
              <div>
                <p className='mb-4 max-w-[360px]  text-right '>
                  {t('footer.description')}
                </p>

                <a href='#' className='mb-4 flex items-center text-white'>
                  <IoLocation className='me-4' />
                  <span className='font-semibold self-center whitespace-nowrap'>
                    {t('footer.location')}
                  </span>
                </a>

                <a href='#' className='flex items-center text-white '>
                  <MdOutlineEmail className='me-4' />
                  <span>mail@mailplatform.com</span>
                </a>
                <div className='my-4 -ms-2 flex gap-2'>
                  {social.map(({ Svg, alt, linkTo }) => (
                    <Link key={alt} href={linkTo}>
                      <Svg className='h-5 w-7' />
                    </Link>
                  ))}
                </div>
              </div>

              <div className='mx-8  flex w-[40%] flex-col  justify-evenly gap-5 font-light  text-white sm:flex-row'>
                <div>
                  <h1 className='text-md font-bold'>
                    {' '}
                    {t('footer.importantLinks')}
                  </h1>
                  <ul className='mt-2 space-y-1'>
                    <li>
                      <Link href='#'>{t('footer.home')}</Link>
                    </li>
                    <li>
                      <Link href='#'>{t('footer.statistics')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.newsAndEvents')}</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className='h-5' />
                  <ul className='mt-2 space-y-1'>
                    <li>
                      <Link href='#'> {t('footer.copyright')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.patents')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.trademarks')}</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className='h-5' />
                  <ul className='mt-2 space-y-1'>
                    <li>
                      <Link href='#'> {t('footer.industrialModels')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.contactUs')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.logIn')}</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className='text-md font-bold'>{t('footer.support')}</h1>
                  <ul className='mt-2 space-y-1'>
                    <li>
                      <Link href='#'> {t('footer.privacySettings')}</Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.technicalSupport')}</Link>
                    </li>
                    <li>
                      <Link href='#'>{t('footer.termsAndConditions')} </Link>
                    </li>
                    <li>
                      <Link href='#'> {t('footer.fAQ')}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=' mt-4 w-[100%] sm:mt-0 sm:w-[30%] md:flex md:flex-col md:justify-between'>
                <p className='text-right text-white'>
                  {t('footer.subscribeNewsletter')}
                </p>
                <div className='my-4 flex flex-row gap-1'>
                  <TextInput
                    inputProps={{
                      placeholder: t('footer.enterEmail'),
                    }}
                    className='rounded px-4'
                  />
                  <button
                    className='cursor-pointer items-center justify-center rounded bg-sec2 px-5 py-2 text-white hover:bg-opacity-70'
                    type='submit'
                    form='search'
                  >
                    <p> {t('footer.subscribe')}</p>
                  </button>
                </div>
                <p className='text-right text-white  '>
                  {t('footer.paymentMethods')}
                </p>

                <div className='my-4 ml-4 w-[245px] '>
                  <PaymentMethodIcon />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )} */}
      <FooterCopyright />
    </>
  );
};
