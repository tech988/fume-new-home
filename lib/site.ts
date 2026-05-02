export type NavItem = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Solutions", href: "/solutions" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const media = {
  homeHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LXvgvanSb2cjZE1nKD0v1eGZNmsMvauAQ-5ADPc1iwfAxoBOOaOi18UfJsw-58Xx0p1F5DVPHf4eZ56SDm502kcaZq9Dfmd9rfszNws03BN3PdQDRIqN4gZGTu-oB-LY7xBiL1ytKjK45i_PGR4Au7UZt8C_NcUOXss0dlm_7n-qKkyq0jj4KMs8nEhiomLZ5V2Vu-YHME4_t36R_m9p3V5oVSp-eUXVw2siycouk7p04hAMHiGEP-0DFgRNajmc3SbOJbJv8Wg",
    alt: "Modern premium coworking lounge with natural light, flexible seating and a polished business environment."
  },
  hotDesk: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo-BUkvuEHAMy08w7wGDbDK9VYMVkR0bmZAnSlNssud4jsfsmukmeaqT6-E49DDwGeYs2q6eae8_yMZMRbr5lW4zB7WNnOysMnmqLMs_4fjls48ogpO3fCw-CCEYrkXEj9YB5mNQDQ0ZytFbOT6DYNdmtUgYVutgyoc-lq4lpDNO1r85cuOrtaKw9LoljJ_RU8BTCemuGwWGUmJndpE9hhdjSKB7BGrs9MOC0yvXTWKRTZyBenscZNi99y6rZuP_xT-ykGeF13_8k",
    alt: "Bright open plan hot desking area inside a premium coworking space."
  },
  dedicatedDesk: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGKblUc1DRURIEYxbJeHHqAIPPWoQ7zV8GqFzBbPyePPmn5DjoIoYSqaXHQrGl6jXzdgLXj40q0cLFRk-7UmtgZcEHdvl_XIdo0B-vXlSmDV-QyD5NpdmmHaBSvxKa5Wxv4Ucip0vcaWdTgZsInsTdMXhhyQJIZ37e0rFvxBjYKpuhHS938vs7qD94F3MTq7Gm4R7uKSa8BxP8aPHNjAFf7Ym8oK0OPdarQElTDENOAR-8vFZdNlu_Bee9KDac82cTK27l6z2eP-I",
    alt: "Dedicated desk setup with monitor and ergonomic seating."
  },
  privateOffice: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3GDkgP0_KVxp4rX83czy3qi-DCpc_S8BfxopGDnhhHXUpZ7l5BQSPj_chVSwteHWHrQ5D_OlNtLnJoxHZ5oTMlWJl1jdV21pja7TEaptH-6u7H2YoB4Z7fETEXFFLORyiLzQnauYA6VvznyzB2B0GXBETpQQpP8HXK42m1WnRKYjniJwc6tDtOn8ogH5F-bAlMnwjcAv7rSQG0bHc_Lp9OwtEd6mApd9tuGKuNXiBehr1_GCdsfh-qGgQjpSPYqgdp-8Z7ntbp5c",
    alt: "Glass enclosed private office inside a modern coworking business hub."
  },
  boardroom: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3jMds8oYqVtpWxXT7F8vaTGtcHRZvYTOsW0BnKiYKyvJq10NXuF2ciVkXljKUe_mLUDO6G_W05--q7LQobQ2kKkBnODfhsEZ67J4_1uPRQ5uXyLZ-OJK7FXxtBuNMGuMWLlcopC5EGrtDOlj4YkHuDAObWdx9dJaWaLuuDDE5cq7ok4ZptECjdKIZ_PjTqEqDBkIE_eThd-TzwZvzVYX-kQPX37NI709VX4OWMt1yDtcdXpMEXlJfR0F8QzsTGg-w_MnD85x81JU",
    alt: "Sophisticated boardroom with premium chairs and presentation setup."
  },
  aboutHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuALVLbTWEGQSoXSRz7jylQPWyYbnPmqU9tyWELXFnBNhD77Tjlztm0nUMF4CCUfLL_jzPX5NUlriz5ucI_wosHxlDm5Zoi7hLq8eUC0dSriHOTXAOM3mX6uZ_PCGF7hz5wOyMEZGPBI7tja1I1QvsyY4KWuEoCNI4g8SHyvXbVMDpoAT44ZdvaTDbW-bqESpUMZsIsRgPT9TNfJaQ4hKONOpmNMI28mgTaUEtuxw-_RTh2tYf_5V42NXNyu6ThvrqYbqCRY8Pxh2yE",
    alt: "Wide angle view of a premium coworking space with glass walls and warm wood accents."
  },
  aboutStory: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMRzeZNIT3YyEHbzuKhYP980Ahti8dyuhEsp0TLVo2UfCtUe5s-6odEOAgKygtEOwkrST0_UFSycssDvhDxmUMEN8iqhBGE1A50k8saXihLqutfxABbocbOsuXKAFMMNCfNFSMdnvgUR4kurWQQUxq-jTOmiq6-S3VZmKh1zS6x0cE12WBrtgtdNzBKRNDdM8SwFutoSoG8tCYH09tI6AyTRk_k8unehZwKL4Ks9BdKiCpwV86OpHLTHruhqcKhW1IFg7QJhA4kDc",
    alt: "Entrepreneurs reviewing plans in a refined coworking lounge."
  },
  teamCollab: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Xwt-ES3sMxVWQof-h7NVdiwIFQ1JNWdFPlq5eCqjyvKtD1TkPXupVLd2ADBuqvcIuHp2VEzUuw11aWJ47av3zyM7SLwWJ53hTn22w4FKdOozWteHqYamNtqEtQQAcOT5YWKiuvkM_Qg9B0CMF_ypGqW9x_rHrauNz-FptqI7vMglfI7-SVp1vr74nVhZi2rumTdr1g9YcTmFkNViCc_jS9y9aU1v62nTp2STlDg0NQr2BqjRLzeWi6c8WePA-6IA3JdubHhBUtw",
    alt: "Team collaborating inside a bright modern meeting room."
  },
  networking: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmzU5wuia8HDE_ISeG78lLAP_LGJ5wNdeGqljqYHOtOy_Q7yUrbnmN-tHpQ7ic_-DLUSkaCPKQZROfXwKp8EVM6OjJIuw0Tl6oTsG9BE0s4tGozZOVvYP39MzABgKXeqTkuliiXG5oktkMsvYrQtYpWz4n0qSsj_hrqvxC46w3-t4xhrX-goOEkUaq6CkriWeOG9H_qiRINnC66uOxX5puTB9C1PUDww_irkt1FdjgJ62jp3_HHLib41XfKSzA696NLQl0wNyRh9A",
    alt: "Networking event inside a premium coworking lounge."
  },
  quietWorkspace: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Fql_0SGUifpCihPuOJLEEUrtePpPy2gK_8RDQ170bjuGJDvHcrT977hXPufvDqrgXcAWI9oX0gtSimf7aqCrI_x1VeqNPndF_q6O0LucMk4DZxbSWErDvjsd9Ys9Nh2l7zYNIcb0CXENAnzn0_9i-GIplk6uRR_NkIinG6b1O-7CgiBMINpJcx9280Lpbvoa2Zqe5l3gEUEGHSf1iDl3NEWcTuAL2COPPAxsigmhHDgVoDJDA3j7GBBF0ETSz2J-xgJB9oSXB6E",
    alt: "Quiet private office suite with minimalist desk and natural light."
  },
  presentationArea: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD79FFgRx6eazrQ4dGA5kHPTZT8et1WFE07IahpjpcbhkBAwT6qXIySX8mG8YWgWieoNNc3EdT2ViEvfaPl6nWMX5ydUfH62hZ604RcU_mHqPv4lJtzIylwQepbZB1gLuL_feb2dl-lqUptD0mTIbB8RWno_DoyY__bUxh4b-I9Hd_N0lg80_6HyfkcL1h5FmT5eOvJ6vkBTeU0la5A4m-O-GjiMw_1kiGyGc0D0qZCFVADIQ7lRMdBn6oLSCDfWKlVfM8a5DGuOS8",
    alt: "Presentation area in a modern coworking space for talks and events."
  },
  locationCyber: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqR3ipUPvl3MWKOdODJRER5EIEklD8-1f5EIszSPQhtL1BXYFayqstvlVp-CwpB759q5ep8yJRUx8f63e1OWptvRWg0RmnhifpNgYhenDubhe2IBMyj734oEgBZPYTlQ_2Pde8618qHKUO06F8ccEyyMJpHbwHY2uhVQqF92TvUZk_eScYFzI8yFrLkX-p_HoxG450qVOHI1onatwfU3nKsLCpAnEGi-nj4nlkvjFUoxILz3h-U6HboHQcWbpRMI11jv6BxvzhQ5U",
    alt: "Bright high-end coworking interior with glass partitions and ergonomic furniture."
  },
  locationGolf: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSX_xGt9LRxpSFCbfHmzrW3jsiPOTpePkJxdvIYeaKm0Fd-zJedlyq5Y9z3YY8gxfkoNAI4_SD-v3tJCdxLWZpyR7XOe04DsEbTnVSb8nXzAiCS_ljJ_zh-cpyrv9_2Z6F10JrReO67y8aYWTCtFE0sL8niIelq7o_d4wQ-hsTyhjDrxzw38Nl6ZGkNo6hxKb5WuKaQO9IRK-UJ1V1639ZRQBPrRTGiqDSyq4rYVHqs5fSzoOvcvN1hP2HqaGTclyvLcGUwLQ35Q4",
    alt: "Professional private office suite with city-facing windows."
  },
  locationUdyog: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASa-wyTRUzQElZQIbYnqcrobLiMhzZUNczHq2NzGx-Uzh-DViIBrUslcy3D-qzUM472o185aKprEFvxuzhkZhDQWmfmxf5-Tq1aT_Vu5gWf8guHCnOzOMnWiz8uLZS7YariS8xBQOyFK4sfTmlaR4YekzglGCMZN-Z_wJFaF2VomQVYQnwlwtfyBGg_oPBzG4syUhNosb7RUrG2O00trjfWwb1tGIgVaApEHivpd7biAyiMAcBmpI8QZ0RdL1F6dyAoe7lfLlHCio",
    alt: "Vibrant coworking lounge with soft seating and greenery."
  },
  locationDetailHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvNOPnz3k_zf6tWLBVl2a-1MgDqb1dkIZLGXI9pjbk9NAimK5tH-VMkJgWAoL_su6NE5F_XS9tjFCYoBeUxXylnjXDh79v-l79NyFUU5l5qSKTM98hwqMkgM8penqw8z-qI27uHH33mjVmoE3nmy-cWme2ZAIyR-jRApFaYJ1oePC0fcQrY8C21Me2ErO1IwbWy3b8xO33zAQA9xjpS0gWyEYW2L07H3Mzbp2sFnD8RBEJd4sdwiTotU7AwOdikmb64OPgqYY7ejk",
    alt: "Premium coworking space in a modern Indian tech hub."
  },
  locationLounge: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG56a1kjFxCsp8EidvfdWNQTfMXlBFn-BGJIJczHfYjSwezmlkQ2pHd-dlAtIeC_GZQv-UsVUu2UrWF5DhJ67OWaRgojAfhE6hor96Y_GeIycC_U9ug17nWc8VQ1OByXYDJSQN-2ahupvcCVU661czBxxL-uPMLJ51UYGWj_2oDa5bGFWfhiN5WnMSPK2Ufl1NYUeXUen-JHcmEMdwm3D2FTDlnDxUKCHjsXy9vIZxxrKEirRMiDovN05qaHSmSmbDBoduDf_RxjA",
    alt: "Coworking lounge area with premium seating and magenta accents."
  },
  locationMeeting: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6bovqBKX9fjkRTXJeRfheHCDtdUlo0d--_7uT9Vy6iEzjf37QvKnfqBQPK9mSmipFZVwbXChmlE0uNrFlwzt6JGW5nwD_1gYwE2RtURTmKqeQKzferlF0hwtEc5zvKxmfDD6zz3Jk2pPJPgrzvqxVQvLyiB5dOpxfrpurZob31HrwM41Y_q_teqAHGO2aESLyET4-P7VHlLZ-5-CuxPxgHlc3tjExOPW_qUOpepEvc-pFrKq8S-6Tzc47V3owv5uJcscXO3wY0vQ",
    alt: "Glass enclosed meeting room in a premium coworking office."
  },
  cafeBar: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJhK_X_hp2mDVQ4PDphpGvlpbiLJIF51pHUdmRVhqO8wKOxjoJKUYZRXsz_qBL2pY2LnPTUITBs6lCKPAiTXi5WDyyTYg4VCE5lh8wjHWdixTcmNKfocu3fc-w5fKetiUW0-HM18RoUcUpqnRxJ9unD0qCC15xWA6jiJTosgJ5OTiXKj5k_8weYXeo98ua26OVf7gixbdK2GUzRDzBkDYyO8Rnve-L82tp4EqGjiDgcAcIFcBMURHlybLPnWqTCwWvGgJ0MwzECk",
    alt: "Coffee bar and breakout area inside a coworking workspace."
  },
  solutionDayPass: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6GmQJKrb-Kes4whSZCzyWv0ureeJF4eS2BpzlW93xljQZ83cnxjDsGMYDPBcV8a8b38jikYINqqWYAhfJ_JUS-RuZL7zLxFd1gcXzrsqVYAJNiu-F5s0DH7RytJH0meaDODH41wkYiJEvrcY-FteaObv0hW_8BXDvcmICjpROze_vufpoaq0fET_yJawtmvq7Vy6eA9XO6DGKC2553Rptg9Ec5EXgnxcpGWUq1zXQuAZhPnnItHSdSxIkN24DE0dMeArTxgo2xek",
    alt: "Bright hot desk workspace for flexible day pass users."
  },
  solutionDedicated: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpnZW8cpbbeh29-c0fLW9ZhG-HUbiA3mzYL624kfrq_jdW-O9aR-kESs_LUvCmOkUotLQbOkXD8ZY2zKIWXp4DNgHGaRVl5pOF0Y3aqylbXDnPQsxItvNI9-XWu0kiZr3AIGrRce8aeqPeTPc1ZCUU24hoW5P6Fk1Grp58RmUjDnPsw5BBkJp78xd1VTbps50WlNRVECUcPS-D4Hi2CQJlRb1gj1Lq4MRFJeWK-wLOk1AEChB-yyra_T6PDdQYnyqVCqwY7xRbm_Y",
    alt: "Dedicated desk setup with dual monitor and ergonomic chair."
  },
  solutionPrivate: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsvbuR77qShLhW6XjRTdqn0p4ZNPGAHSR6o0vNKuLpIXCflY2m5dMTjKX1UM9NW6LzO6KTH0wZexRulmB_J84TsXhse9NZmCqu1zJraCwLVp5WPI8QIvNLNY_ZXdu_ncAKTEDcLMmVNYpXZcqCrrqcOKfUCx6MJiQrTj1E-u9GB-58I4FF-v9AfCcFTIb1gWTaQRACC4t03fbMQwvGkGeK38HwCXHkrkwuwfowO84vkSSN3Nurypgsrj3sWi1UUcvkpW-F28_HV-U",
    alt: "Private office suite designed for a growing team."
  },
  solutionMeeting: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu0idMEXVEf_1grV6o4VATmXWRk-XQCuMDj6lxuoxJAxiVOAXcXzLha5ou5__nCRP-PSe7BbcDE9fZeMzoh1F_mYrb9KGVeNA_bHIe0HpufK3O63D4-rWROqowH88c_3ATnQVIf9DpoU9L8q7JXQsNdjuDoU6odXwVs7UOZk_XRQNgA408Roy1k_0znW2l2E_GmFj-w0fPshpZXgWE0h8Gxbnd4ORuzVaxa8rXDMg7IB5yC0qXukjjERuc-XUiXX-hzPYMl7PhGNw",
    alt: "State-of-the-art meeting and conference room."
  },
  enterpriseHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj7fBDlerI-0HY16ywiC8h5T7D9cOlb-KpiLVnY9s7jU9ntXJqm147WGjj1TpogSjMFndHYDbY-HWmvulroNstD9fSk_oWgcXj6-W2aCQq7bBX6RzVsADcqpzHf8_4FPJKAyeT_T-W0eItdbutyMOUct6nqiYVHRRUKpWcfn1eY4Cv3v4H1SZqRmz1OUQ2WprTTjH8EzsYmqCLlM5UNfITkFVel3kkKObazhFcMDlKW59CAw0KbKpf28PzNAT2xTU-MlUGkrihipA",
    alt: "Large enterprise coworking setup with natural light and team seating."
  },
  enterpriseOffice: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBILliejiRpj0cppIAcxQhwnj7CKk_BF_7yWHKiC7vvaGUWABxKtTRsazxTwXmWwetovs4beU3l5v7jasYuRGr6IszyLBrk9en6WiXlFcgXk8_mEC3ZycSdPKGJcXfXyjFvHErYfWB7XvHZWnHBeI_N5i5HxmVDnyHIT2dCXg41Hhw8_HKuqkUOBjMoNOZI7TAdxCzO5-a51SkptViiFy0UoVOPGHIiTtsFa9lidSZNzom_boZDpQ9PSUEOUs0miZbatCPbnEdcxz4",
    alt: "Customizable private office suite inside a premium coworking facility."
  },
  blogWorkspace: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOgV_T_rh93-uTFwh8oWa0H5K8NoU27FearhtEWnnYUY-Y01EyHFqAQMdYaGmjl4awGVxprFQQBXYVzJd-QWnopz1zCli7JGDl4JmHOFlivMrgMMzTYNnuvwUYjyBBNDpHaP7IyVl9qgaygvkulC7F6np28l7rYVel_0_qiWniYvtenK4d1zzJqvNqLSAi_C70r6BM9NMhvobkEJ_IxNwy0Fe-l18BcooX8AFBQUfIJKC5IrJxtXlxRisutE7ytobE3hz34uvwAUo",
    alt: "Modern coworking space with desks, natural light and clean design."
  },
  blogMeeting: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFku5I7tFdVNtxm75ldjF69WNoOy_TM1znNx-K3iAi0eRGvPNQrK-HqeAKs4HcdrJWF7UIa79jQXAT5slvQLEgOrXPvWQJokikcLzM2SFwmi7oa-zpYY38R5a3zCWLnsCzUkz2VpHpL-WawGI6XdNMfa-9UqfbktLvq2UQ6yLMZOQxACw5nZG9H33Z-lnH7rLoQBBNRSRQJEyBgf-YRmcnsXswrjkHtKNPk2WsKFWMvNP32JEwPVwK_ZYNQliIjHLeRKcLDEFUVhE",
    alt: "Team meeting in a sunlit coworking meeting room."
  },
  blogNetworking: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnfsRdf512KRHI6HbHv0YvImmMAIAwnHWFIRTunyyCEQ7MYDqbV_dMJy106D2SwZifEGyeHbpORTWdGYtJAYTEpywpdm5sWxxqv76velSUe4_iz2ay5aj1FlC0Y380GQj1-RcgGRTNqe7iJVd0K0pWR-hywzcPjBTHBypZLmUe0N88egjeXZ4BGyub121daczeKufDgZF2xSc0KUPsFBfufmbOrjLftn-AI0bND-w8RYnH4oNaiIPzYs-QL0Z-Bh3wP_9QzdnCSYk",
    alt: "Networking event in a premium coworking lounge."
  },
  blogDesk: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUEbbWRHHlOWAKvoPCzRCaXNSM7ISk7pBQZn2ldw9-AaUnTVpN-yxZ9HYrzsqGH5lsS-nG_KWrPKbKBUcdgHAf7TRSBi4-c-zU9d8dkJzEp8lFJ3jUMOqDhl0niVwickh8VBzVH8xPmgG8pZOq0B3xDLL8XoT0ZpDV5qGGv0CfhwAsYSHF8Cu9nBNueMXgI3Tbgc3l0DlkkSgEGfucWEbUT6pDI1DXrQ6JtiR8a-iFKcIRGJniZlqxXyaAEU9iVcd49zeVpe28qtw",
    alt: "Minimalist desk setup with laptop and coffee."
  },
  blogPostHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXmjZSDezpcgrNfzzfAljOEHQSLnjrq4Rue1H7XmPSZy5gOn3LIWzcCpx5uu4w-AlUIB-wqZhm37Rg4Q8HMebaRbCN1D8VBcN0buckVDTcD-X3DiQn_kt87prBYohYysa2gM9mD2Wub_jNttirnjbmivMnEfNTca8hKglxA-sUGORFDGAJsp7K8nWO3X36UX8OYFNEjbfN0L1MPrcm8cs-X4X4iPQDTW9r2UEAl9-Z71D1IfP8y93UqoVJjLdXxC4R2PMJgVZeanc",
    alt: "Cinematic view of a luxurious modern coworking space with natural light."
  },
  bookTourHero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFo_KC3GgpiYzusJvVRXVhZYm8D0TsPYm8iXfdjzvA6I0FIn2qlsuEe1fnXR0oJXi75R1-aEEmP_-fG2QCTnsjw6-_oEVLhKo2aAMWMMM-fPb43fB8eTAIUYrbvfdvmU-m0iYsteJOctvw2FjTrBA0je5qGbZEDAAzXfHii2ky3w0oIMecWmhTKeuB41S7onjsUko96wRySE-j4TyinaIQ0iHQH5sdiQNinQqnmqX8E6EUJvUbG29rwC-vftunMtqN5tRsTugM5Lc",
    alt: "Premium coworking space interior prepared for visitor tours."
  },
  contactMap: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpB4PtQfUdSFxpv7Ig8U8kvXFjLYWbYzcv6pkpt70NRoIfsGglxW_LqNtdw3UQKwDkBtV8wOrGP_pza85MBiGPzYyRGOfxIA0Q2eWEf96G0jXnM5z9GBeec5sgkjfpiNOMa3Ym-CyV2J8kEG-WxEXNJCcdFVCHISY3RWp2N-pD3WODAjusfXs95cBdyqd8ISIcdHUZEfuWFdkqmOXZp0QT75-FopjS2SuKn_N6HIzxDQWQocjy_R4W9XoGikAwpB4eIcEGXqkKwik",
    alt: "Stylized map visual highlighting business hubs in India."
  }
};

export const galleryImages: ImageAsset[] = [
  media.homeHero,
  media.hotDesk,
  media.dedicatedDesk,
  media.privateOffice,
  media.boardroom,
  media.locationLounge,
  media.locationMeeting,
  media.cafeBar,
  media.teamCollab,
  media.networking,
  media.quietWorkspace,
  media.presentationArea
];

export const locations = [
  {
    slug: "cyber-city-gurgaon",
    name: "Fume Cyber City",
    city: "Gurugram",
    address: "Cyber City, Gurugram",
    description: "A premium workspace address for founders, teams and operators who want easy metro access, meeting rooms and a polished daily work environment.",
    highlights: ["Near business hubs", "Meeting rooms", "Day passes", "Private offices"],
    capacity: "250+ seats",
    starting: "Day passes and monthly plans",
    accent: "from-fume-rose to-fume-plum",
    image: media.locationCyber
  },
  {
    slug: "golf-course-road",
    name: "Fume Golf Course Road",
    city: "Gurugram",
    address: "Golf Course Road, Gurugram",
    description: "Designed for growing businesses that need a premium client-facing workspace with flexible plans and strong operational support.",
    highlights: ["Private cabins", "Conference rooms", "Team seating", "Business support"],
    capacity: "180+ seats",
    starting: "Flexible plans",
    accent: "from-fume-plum to-fume-violet",
    image: media.locationGolf
  },
  {
    slug: "udyog-vihar",
    name: "Fume Udyog Vihar",
    city: "Gurugram",
    address: "Udyog Vihar, Gurugram",
    description: "A practical, well-connected workspace for startups, remote teams and companies that need everyday convenience and predictable operations.",
    highlights: ["Managed workspace", "Guest access", "Printing support", "Parking assistance"],
    capacity: "160+ seats",
    starting: "Fixed seats and cabins",
    accent: "from-fume-green to-fume-plum",
    image: media.locationUdyog
  }
];

export const solutions = [
  {
    title: "Day Pass",
    description: "A professional workspace for productive single-day use, trial visits or flexible workdays.",
    bestFor: "Freelancers, consultants, founders and remote workers",
    features: ["Plug-and-work desk", "High-speed internet", "Community access", "Tea/coffee support"],
    cta: "Book Day Pass",
    image: media.solutionDayPass
  },
  {
    title: "Dedicated Desk",
    description: "A consistent workspace for individuals who need a reliable seat, storage and routine.",
    bestFor: "Solo founders and independent professionals",
    features: ["Reserved seat", "Monthly access", "Guest support", "Meeting room add-ons"],
    cta: "Explore Desk Plans",
    image: media.solutionDedicated
  },
  {
    title: "Private Office",
    description: "A private managed office for teams that want focus, privacy and brand-ready workspace setup.",
    bestFor: "Growing teams and agencies",
    features: ["Private cabins", "Team seating", "Brand-ready setup", "Admin support"],
    cta: "Request Quote",
    image: media.solutionPrivate
  },
  {
    title: "Meeting & Conference Rooms",
    description: "Professional rooms for reviews, client meetings, workshops, interviews and team sessions.",
    bestFor: "Client-facing teams and workshop hosts",
    features: ["Hourly booking", "AV support", "Reception assistance", "Flexible room sizes"],
    cta: "Book a Room",
    image: media.solutionMeeting
  }
];

export const enterpriseFeatures = [
  "Custom seating plans and branded zones",
  "Multi-location access and team-level permissions",
  "Centralized billing and invoice support",
  "Priority meeting room and guest management workflows",
  "Workspace operations support for HR, Admin and Finance teams",
  "Scalable plans for distributed and hybrid teams"
];

export const blogPosts = [
  {
    slug: "future-of-flexible-workspaces",
    title: "The future of flexible workspaces for growing teams",
    excerpt: "How founders and operators can use flexible workspace models to reduce overhead, improve speed and support hybrid teams.",
    category: "Workspace Strategy",
    date: "May 2026",
    readTime: "5 min read",
    image: media.blogWorkspace
  },
  {
    slug: "choosing-the-right-coworking-location",
    title: "How to choose the right coworking location for your team",
    excerpt: "A practical checklist for comparing access, pricing, meeting rooms, commute, guest handling and growth flexibility.",
    category: "Location Planning",
    date: "May 2026",
    readTime: "4 min read",
    image: media.blogMeeting
  },
  {
    slug: "managed-office-vs-traditional-lease",
    title: "Managed office vs traditional lease: what actually changes?",
    excerpt: "A simple breakdown of the operational and financial differences between managed spaces and long-term leases.",
    category: "Enterprise",
    date: "May 2026",
    readTime: "6 min read",
    image: media.blogNetworking
  }
];

export const stats = [
  { label: "Workspace options", value: "4+" },
  { label: "Gurugram hubs", value: "3" },
  { label: "Teams supported", value: "100+" },
  { label: "Flexible plans", value: "Daily to enterprise" }
];

export const faqs = [
  {
    q: "Can I book a tour before choosing a plan?",
    a: "Yes. The public site keeps a lead/tour form visible across pages so prospects can request a visit without searching for the contact page."
  },
  {
    q: "Can teams use multiple locations?",
    a: "Yes. Multi-location access can be configured for company teams depending on the selected plan and operational approval."
  },
  {
    q: "Are meeting rooms available separately?",
    a: "Yes. Meeting and conference rooms can be booked separately or added to workspace plans depending on availability."
  }
];
