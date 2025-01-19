'use client';
import React from 'react';
import Main from '@/layouts/main';
import BottomNavigationBar from '@/layouts/components/bottom-navigation-bar';
import { NAVBAR_BOTTOM } from '@/constant';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Main style={{ paddingBottom: NAVBAR_BOTTOM }}>{children}</Main>
      <BottomNavigationBar />
    </>
  );
}
