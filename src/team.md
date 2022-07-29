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
    avatar: 'https://www.github.com/aryakaul.png',
    name: 'Arya Kaul',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/aryakaul' },
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

