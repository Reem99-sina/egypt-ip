'use client';

import { ModalRef } from '@/components/shared/modal.component';
import { RefObject, useRef } from 'react';
import { useUser } from '@/hooks/useUser';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth.hook';
import { useTranslation } from '@/translations/clients';
import { Spinner } from '@/components/shared/spinner.component';
import clsx from 'clsx';
import { Button } from '@/components/shared/button.component';
import { FaUser,MdEdit,IoIosArrowDown, TbSquareCheck, IoIosLogIn, MdOutlineLanguage } from '@/icon';

interface Props {
  modalRef: RefObject<ModalRef>;
  isHomeVersion?: boolean;
  isMobileVersion?: boolean;
}

const UserInformation: React.FunctionComponent<Props> = ({
  modalRef,
  // isHomeVersion,
  isMobileVersion,
}) => {
  // const [stepIndex, setStepIndex] = useState(1);
  // const [type, setType] = useState('');
  // const [stepTwotype, setStepTwoType] = useState('');

  const { user, isLoadingUser } = useUser();
  const { logout } = useAuth();
  const { changeLanguage, lang } = useTranslation();
  const refModal = useRef<ModalRef>(null);
  if (isLoadingUser) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <div className='flex items-center'>
          <Menu lockScroll>
            <MenuHandler>
              <div className='flex  cursor-pointer items-center gap-2'>
                <div className='flex items-center'>
                  <FaUser
                    stroke={isMobileVersion ? 'white' : '#7B8494'}
                  />
                  <p
                    className={clsx(
                      `ml-4 mr-4 cursor-pointer text-sm font-bold sm:text-base ${
                        isMobileVersion ? 'text-white' : 'text-[#595959]'
                      }`,
                    )}
                  >
                    {user?.username}
                  </p>
                  <p
                    className={clsx(
                      ` cursor-pointer text-xs font-bold sm:text-xs ${
                        isMobileVersion ? 'text-white' : 'text-[#00A4B4]'
                      }`,
                    )}
                  >
                    {user?.userType === 'admin'
                      ? 'شخصي'
                      : user?.userType}
                  </p>
                </div>
                <IoIosArrowDown
                  className={clsx(
                    `${isMobileVersion ? 'fill-white' : 'fill-blue-gray-500'}`,
                  )}
                />
              </div>
            </MenuHandler>
            <MenuList className='w-56 bg-[#F4F6F9] p-0 shadow-none'>
              <Link href='/account/profile'>
                <MenuItem className='rounded-none'>
                  <div className='relative flex flex-col items-center '>
                    <FaUser />
                    <p
                      className={`mt-4 text-sm font-bold ${
                        isMobileVersion ? 'text-white' : 'text-[#03787C]'
                      }`}
                    >
                      {user.username}
                    </p>
                    <p className='text-xs font-bold text-[#03787C]'>
                      {user.email}
                    </p>
                  </div>
                  <div className='absolute left-[70px] top-11 '>
                    <MdEdit />
                  </div>
                </MenuItem>
              </Link>

              <MenuItem className='rounded-none bg-white'>
                <div className='relative flex items-center justify-between '>
                  <div>
                    <FaUser />
                  </div>

                  <div className='flex flex-col'>
                    <p
                      className={`text-sm font-bold ${
                        isMobileVersion ? 'text-white' : 'text-[#2C5F7D]'
                      }`}
                    >
                      {user.username}
                    </p>
                    <p className='text-xs font-normal text-[#03787C]'>
                      {user.userType === 'admin'
                        ? 'حساب شخصي'
                        : user.userType}
                    </p>
                  </div>
                  <div>
                    <TbSquareCheck />
                  </div>
                </div>
              </MenuItem>

              <div
                className='cursor-pointer font-bold'
                onClick={() => refModal?.current?.open()}
              >
                <MenuItem className='my-2 flex flex-row rounded-none    text-[#7B8494]'>
                  
                  حساب تعريفي جديد
                </MenuItem>
              </div>

              <Link href='/' onClick={() => logout()} className='font-bold'>
                <MenuItem className='mt-[15px] flex flex-row rounded-none bg-[#7B8494] text-white'>
                  <IoIosLogIn className='ml-1' />
                  تسجيل الخروج
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <div className='ml-4 ' />

          {/* <span className=' cursor-pointer'>
            <AccessIcon stroke={`${isMobileVersion ? 'white' : '#00A4B4'}`} />
          </span> */}
          <p className='ml-2 mr-2 text-[#7B8494] '>|</p>

          <Menu lockScroll>
            <MenuHandler>
              <div className='flex  cursor-pointer items-center gap-2 rounded-none'>
                <MdOutlineLanguage
                  stroke={`${isMobileVersion ? 'white' : '#00A4B4'}`}
                />
              </div>
            </MenuHandler>
            <MenuList>
              <MenuItem className='flex items-center '>
                {/* <KsaFlag className={clsx(lang === 'ar' ? 'ml-1' : 'mr-1')} /> */}
                <span onClick={() => changeLanguage('ar')}>
                  {lang === 'ar' ? (
                    <p className='text-sm font-[700px] text-[#7B8494]'>
                      اللغة العربية
                    </p>
                  ) : (
                    <p>Arabic</p>
                  )}
                </span>
              </MenuItem>
              <MenuItem className='flex items-center '>
                {/* <UsaFlag className={clsx(lang === 'ar' ? 'ml-1' : 'mr-1')} /> */}
                <span onClick={() => changeLanguage('en')}>
                  {lang === 'ar' ? <p>اللغة الانحليزية</p> : <p>English</p>}
                </span>
              </MenuItem>
            </MenuList>
          </Menu>

          <div className='ml-4 ' />
        </div>
      ) : (
        <div className='flex items-center'>
          <Button
            onClick={() => {
              modalRef.current?.open();
            }}
            text='تسجيل الدخول'
            className='relative ms-6 flex  h-10 w-32 flex-row !bg-bottomColor px-4 py-1 text-sm'
          />
          {/* <span className=' mr-10 cursor-pointer  '>
            <AccessIcon stroke={`${isMobileVersion ? 'white' : '#00A4B4'}`} />
          </span> */}
          <p className='ml-2 mr-2 text-[#7B8494] '>|</p>
          <span className='cursor-pointer'>
            <MdOutlineLanguage stroke={`${isMobileVersion ? 'white' : '#00A4B4'}`} />
          </span>
        </div>
      )}

      {/* <FormModal
        ref={refModal}
        className={
          stepIndex == 3
            ? 'w-[33%]'
            : stepIndex == 2 && type == 'نيابة عن الغير'
            ? 'w-[40%]'
            : stepIndex == 2
            ? 'w-[50%]'
            : ''
        }
      >
        <div className='absolute right-[5%] top-[13px]'>
          <SmallFullWhiteLogoIcon />
        </div>
        <div className='flex flex-col bg-white'>
          {stepIndex > 1 && (
            <div
              className={clsx(
                'absolute  flex cursor-pointer items-center gap-x-3',
                stepIndex == 3 ? 'top-[19%]' : 'top-[25%]',
              )}
              onClick={() =>
                stepIndex > 1
                  ? setStepIndex(stepIndex - 1)
                  : refModal?.current?.close()
              }
            >
              <ArrowBack />
              <p className='text-white'>عودة</p>
            </div>
          )}
          <div className='relative'>
            {stepIndex == 1 && (
              <StepOne
                onChange={count => setStepIndex(count)}
                type={type}
                onChangeType={(type: string) => setType(type)}
              />
            )}
            {stepIndex == 2 && type == 'نيابة عن الغير' && (
              <StepTwoAlternative
                type={type}
                onChange={count => setStepIndex(count)}
                onChangeType={(type: string) => setStepTwoType(type)}
              />
            )}
            {stepIndex == 2 && type == 'مقدم خدمات' && (
              <StepTwoProvider
                type={type}
                onChange={count => setStepIndex(count)}
                onChangeType={(type: string) => setStepTwoType(type)}
              />
            )}
            {stepIndex == 3 && <StepThree type={stepTwotype} />}
          </div>
          <div className='mx-2  h-[1px] w-full bg-divider' />
          <div className='flex items-center justify-between p-4'>
            <div className='flex flex-col '>
              <StepperComponent step={stepIndex} />
              <div className='text-sm'>
                <p>خطوه ({stepIndex}) من (3)</p>
              </div>
            </div>
            {stepIndex == 3 && (
              <div className='flex items-center gap-x-3'>
                <Button
                  onClick={() => {
                    // refModal.current?.open();
                  }}
                  text='اضافة'
                  className=' !bg-unactiveStep !px-10 !py-2 !text-sm !text-stepActive '
                />
                <Button
                  onClick={() => {
                    refModal.current?.close();
                  }}
                  text='الغاء'
                  className='!w-auto !border !border-divider !bg-white !px-10 !py-2 !text-sm !text-stepActive'
                />
              </div>
            )}
            {stepIndex < 3 && (
              <Button
                onClick={() => {
                  refModal.current?.close();
                }}
                text='الغاء'
                className='!w-auto border border-divider bg-white !px-10 !py-2 !text-sm !text-stepActive'
              />
            )}
          </div>
        </div>
      </FormModal> */}
    </>
  );
};
export default UserInformation;
