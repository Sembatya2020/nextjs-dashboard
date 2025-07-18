/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

// Simple utility function to replace clsx
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Pagination({ 
  totalPages 
}: { totalPages: number }) {
  // NOTE: Uncomment this code in Chapter 11

  // const generatePagination = require('@/app/lib/utils').generatePagination;
  // const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      {/*  NOTE: Uncomment this code in Chapter 11 */}

      {/* <div className="inline-flex">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={`${page}-${index}`}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div> */}
    </>
  );
}

/* NOTE: Uncomment these functions in Chapter 11
function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = cn(
    'flex h-10 w-10 items-center justify-center text-sm border',
    (position === 'first' || position === 'single') ? 'rounded-l-md' : '',
    (position === 'last' || position === 'single') ? 'rounded-r-md' : '',
    isActive ? 'z-10 bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-900',
      'hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  );

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = cn(
    'flex h-10 w-10 items-center justify-center rounded-md border',
    isDisabled ? 'pointer-events-none text-gray-300' : 'hover:bg-gray-100',
    direction === 'left' ? 'mr-2 md:mr-4' : '',
    direction === 'right' ? 'ml-2 md:ml-4' : '',
  );

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className="w-4" />
    ) : (
      <ArrowRightIcon className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
*/
