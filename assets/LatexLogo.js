"use client"; // This makes it a client component

import React from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function LatexLogo() {
  return <InlineMath math="\LaTeX" />;
}
