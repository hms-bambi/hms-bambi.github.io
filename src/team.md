---
layout: page
title: Our Team
description: A collection of scientists interested in volunteering our technical skills.
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/clarabakker.png',
    name: 'Clara Bakker',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/clarabakker' },
    ]
  },
  {
    avatar: 'https://www.github.com/logan-blaine.png',
    name: 'Logan Blaine',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/logan-blaine' },
    ]
  },
  {
    avatar: 'https://www.github.com/claralea.png',
    name: 'Clara-Lea Bonzel',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/claralea' },
    ]
  },
  {
    avatar: 'https://www.github.com/dmc747.png',
    name: 'Darcé Costello',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/dmc747' },
    ]
  },
  {
    avatar: '/arya.webp',
    name: 'Arya Kaul',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/aryakaul' },
      { 
          icon: {
              svg: "<svg role=\"img\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><title>Gitee</title><path d=\"M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z\" fill=\"#C71D23\"></path></svg>"
          },
          link: 'https://arya.casa' 
      }
    ]
  },
  {
    avatar: 'https://www.github.com/manzt.png',
    name: 'Trevor Manz',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/manzt' },
      { icon: 'twitter', link: 'https://twitter.com/trevmanz' },
    ]
  },
  {
    avatar: 'https://www.github.com/emarosti.png',
    name: 'Eliana Marostica',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/emarosti' },
    ]
  },
  {
    avatar: 'https://www.github.com/apnathan.png',
    name: 'Aparna Nathan',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/apnathan' },
    ]
  },
  {
    avatar: 'https://www.github.com/grasskind.png',
    name: 'Greg Raskind',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/grasskind' },
    ]
  },
  {
    avatar: 'https://www.github.com/rumker.png',
    name: 'Laurie Rumker',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/rumker' },
    ]
  },
  {
    avatar: 'https://www.github.com/lw453.png',
    name: 'Lily Wang',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/lw453' },
    ]
  },
];
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      We are a collection of Harvard Medical School scientists
      interested in volunteering our technical skills to support
      local minority-owned/serving organizations.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="members" />
</VPTeamPage>

