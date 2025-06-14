import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

type EmptyPlaceholderProps = React.HTMLAttributes<HTMLDivElement>;

export function EmptyPlaceholder({
  className,
  children,
  ...props
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        'animate-in fade-in-50 flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center',
        className,
      )}
      {...props}
    >
      <div className='mx-auto flex max-w-[420px] flex-col items-center justify-center text-center'>
        {children}
      </div>
    </div>
  );
}

interface EmptyPlaceholderIconProps
  extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons;
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}: EmptyPlaceholderIconProps) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className='bg-muted flex h-20 w-20 items-center justify-center rounded-full'>
      <Icon className={cn('h-10 w-10', className)} {...props} />
    </div>
  );
};

type EmptyPlaceholderTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}: EmptyPlaceholderTitleProps) {
  return (
    <h2 className={cn('mt-6 text-xl font-semibold', className)} {...props} />
  );
};

type EmptyPlacholderDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}: EmptyPlacholderDescriptionProps) {
  return (
    <p
      className={cn(
        'text-muted-foreground mt-2 mb-8 text-center text-sm leading-6 font-normal',
        className,
      )}
      {...props}
    />
  );
};
