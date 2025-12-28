export interface MenubarIconItemProps {
  path: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface CustomBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  label?: string;
}

export interface WalletBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon1: React.ReactNode;
  value1?: string | number;
  icon2: React.ReactNode;
  value2?: string | number;
}
