import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

// Simple className utility to replace clsx
function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        status === 'pending' ? 'bg-gray-100 text-gray-500' : '',
        status === 'paid' ? 'bg-green-500 text-white' : '',
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
