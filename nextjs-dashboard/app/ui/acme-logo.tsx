import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <GlobeAltIcon className="h-8 w-8 md:h-10 md:w-10 text-white rotate-[15deg]" />
      <p className="text-[32px] md:text-[40px] ml-2 text-white">Acme</p>
    </div>
  );
}
