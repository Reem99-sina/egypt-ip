import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type SetParams =
  | {
      key: string;
      value: string | string[];
      isMultiple?: false;
    }
  | {
      multiple: { [key: string]: string | string[] };
      isMultiple: true;
    };

export const useHandleSearchParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isRedirecting, seIsRedirecting] = useState(false);

  useEffect(() => {
    seIsRedirecting(false);
  }, [searchParams]);

  function redirect(search: string) {
    const query = search ? `?${search}` : '';

    if (searchParams.toString() === search) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    seIsRedirecting(true);
    router.push(`${pathname}${query}`);
  }

  const setSearchParams = (params: SetParams) => {
    const current = new URLSearchParams(searchParams?.toString());

    if (params.isMultiple) {
      Object.keys(params.multiple).forEach(optionKey => {
        current.delete(optionKey);
        const value = params.multiple[optionKey];
        if (typeof value === 'string') {
          current.append(optionKey, value);
        } else {
          (value || []).forEach(v => {
            current.append(optionKey, v);
          });
        }
      });
    } else {
      if (typeof params.value === 'string') {
        current.set(params.key, params.value);
      } else {
        current.delete(params.key);
        params.value.forEach(v => {
          current.append(params.key, v);
        });
      }
    }

    const search = current.toString();
    redirect(search);
  };

  const removeSearchParam = ({
    optionKey,
    value,
  }: {
    optionKey?: string | string[];
    value?: string;
  }) => {
    const current = new URLSearchParams(searchParams?.toString());

    if (typeof optionKey === 'string') {
      if (value) {
        let currentValueArr = searchParams.getAll(optionKey);

        currentValueArr = currentValueArr.filter(item => item !== value);

        current.delete(optionKey);
        currentValueArr.forEach(v => {
          current.append(optionKey, v);
        });
      } else {
        current.delete(optionKey);
      }
    } else {
      optionKey?.forEach(k => current.delete(k));
    }

    const search = current.toString();
    redirect(search);
  };

  const removeAll = () => {
    const current = new URLSearchParams();

    const search = current.toString();

    redirect(search);
  };

  return {
    setSearchParams,
    removeSearchParam,
    searchParams,
    isRedirecting,
    removeAll,
  };
};
