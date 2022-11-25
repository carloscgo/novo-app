import { ReactElement } from 'react';

type TLogo = ReactElement | React.ReactNode

export interface Props {
  logoLeft: TLogo;
  copyright: string;
  logoRight: TLogo;
}