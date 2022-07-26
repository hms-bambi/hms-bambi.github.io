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
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="xmlns="http://www.w3.org/2000/svg" height="26" width="26"><path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-1-2.05V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.988 5.3Q7.975 19.575 11 19.95Zm6.9-2.55q.5-.55.9-1.188.4-.637.663-1.325.262-.687.4-1.412Q20 12.75 20 12q0-2.45-1.362-4.475Q17.275 5.5 15 4.6V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h6q.425 0 .713.287.287.288.287.713v3h1q.65 0 1.175.387.525.388.725 1.013Z"/></svg>'
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

