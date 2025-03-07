'use client';

import { AppBar, Container, Menu, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import pages from '@/utils/data';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '90%',
        height: '30px',
        marginTop: '10px',
        borderRadius: '40px',
        boxShadow: '0px 4px 30px 0px #B333E914',
        background: '#FFFFFF'
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        {pages.map(page => (
          <Link
            key={page}
            href={`#${page.toLowerCase()}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography
              sx={{
                color: '#3C3C3C',
                textAlign: 'center',
                cursor: 'pointer',
                mx: 2
              }}
              variant="body1"
            >
              {page}
            </Typography>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
