'use client';

import { AppBar, Container, Menu, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const pages = ['About', 'Work', 'Technologies', 'Blog'];

export default function Header() {
  return (
    <AppBar position="static" sx={{ display: 'flex', background: 'red' }}>
      <Toolbar>
        {pages.map(page => (
          <Link
            key={page}
            href={`/${page.toLowerCase()}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography sx={{ textAlign: 'center', cursor: 'pointer', mx: 2 }}>
              {page}
            </Typography>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
